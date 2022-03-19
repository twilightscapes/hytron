// import React from "react"
import React, { useState, useRef } from "react";
import { Link, graphql } from "gatsby"
import ReactPlayer from 'react-player/lazy'
import { Layout } from "../components/layout"
import { Footer } from "../components/footer";
import { Seo } from "../components/seo"
import { ImPlay } from "react-icons/im"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
// import Controls from "../components/Controls";
import { Helmet } from "react-helmet"
import { getSrc } from "gatsby-plugin-image"
import BlogListHome from "../components/blog-list-home"
// import Newsignup from "../components/newssign"
import Details from "../components/equipment-list"
import Contact from "../components/Contact-inc"

// import FrontLoader from "../../static/assets/grid-loader.svg"
// import { RiArrowRightSLine } from "react-icons/ri"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import BackgroundImage from 'gatsby-background-image'
// import Panel1 from "../components/panel1"
// import Panel2 from "../pages/shawshank-trailer"



// import TimeAgo from 'react-timeago'
// import Countdown from 'react-countdown'

export const pageQuery = graphql`
  query HomeQueryHomeQuery($id: String! ) {
    
    
    site {
      siteMetadata {
        title
        titleDefault
        siteUrl
        description
        image
        twitterUsername
        companyname
        showfooter
      }




      

      

    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "YYYY-MM-DD-HH-MM-SS")
        slug
        title
        description
        showFeature
        showPosts
        showInfo
        youtuber
        youtubestart
        youtubeend
        youtubemute
        youtubecontrols
        youtubeautostart
        svgzindex
        tagline
        featuredImage {
          publicURL
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        secondaryImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 800)
          }
        }
        underlayImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
        cta {
          ctaText
          ctaLink
        }
        svgImage{
          relativePath
        }
      }
    }





  
    capability1: file(relativePath: { eq: "measurement.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED,)
      }
    }
    capability2: file(relativePath: { eq: "front-building.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
    capability3: file(relativePath: { eq: "facilities.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }



    

    

    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD-HH-MM-SS")
            slug
            title
            nftdrop
  
            
            featuredImage {
              publicURL
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`










const HomePage = ({ data }) => {


 const Capability1 = data.capability1.childImageSharp.gatsbyImageData
 const Capability2 = data.capability2.childImageSharp.gatsbyImageData
 const Capability3 = data.capability3.childImageSharp.gatsbyImageData

//  const imageData = data.desktop.childImageSharp.fluid

  // const { postcount } = useSiteMetadata()
  const { markdownRemark, posts } = data 
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

    const SecondaryImage = frontmatter.secondaryImage
    ? frontmatter.secondaryImage.childImageSharp.gatsbyImageData
    : ""
  
    // const UnderlayImage = frontmatter.underlayImage
    // ? frontmatter.underlayImage.childImageSharp.gatsbyImageData
    // : ""

    // const { iconimage } = useSiteMetadata()

    // const imageData = data.desktop.childImageSharp.fluid
    const { siteUrl } = useSiteMetadata()

    const YouTubeStart = frontmatter.youtubestart
    const YouTubeEnd = frontmatter.youtubeend
    const YouTubeMute = frontmatter.youtubemute
    const YouTubeControls = frontmatter.youtubecontrols
    const YouTubeAutostart = frontmatter.youtubeautostart

    const ShowFeature = frontmatter.showFeature
    const ShowInfo = frontmatter.showInfo
    const ShowPosts = frontmatter.showPosts

    const Svg = frontmatter.svgImage
    const svgZindex = frontmatter.svgzindex
    if (!Svg) {
      
    }
    else{
      <AddSvg />
    }


    function AddSvg(){
      const svgUrl = "../assets/" + frontmatter.svgImage.relativePath + ""
      return (
        <object title="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" className={svgZindex + " " + svgZindex} id="svg1" data={svgUrl} type="image/svg+xml" style={{position:'absolute', bottom:'0', left:'0', right:'0', top:'0', overflow:'hidden', display:'block', border:'2px solid red', zIndex:'', width:'100vw', height:'100vh',  }} alt="Animation: Milky Way rotating over Todd Lambert while he is camping in front of a campfire" ></object>
      )
    }



    const [state, setState] = useState({
      playing: true,
      controls: false,
      light: true,
      muted: true,
      loop: true,
    });
    const playerRef = useRef(null);
    // const controlsRef = useRef(null);
    
    const {
      playing,
      controls,
      light,
      muted,
      loop,
      // playbackRate,
      // pip,
      // played,
      // seeking,
      // volume,
    } = state;
    
    // const handlePlayPause = () => {
    //   setState({ ...state, playing: !state.playing });
    // };
    
    // const hanldeMute = () => {
    //   setState({ ...state, muted: !state.muted });
    // };
    
    const { iconimage } = useSiteMetadata()

 




const YouTube = frontmatter.youtuber

if (!YouTube) {

}
else{
  
  <Iframer />
}

function Iframer() {
  

  const Url = "https://www.youtube.com/embed/" + frontmatter.youtuber + "?controls=" + frontmatter.youtubecontrols + "&amp;showinfo=0&amp;rel=0&amp;autoplay=1&amp;start=" + frontmatter.youtubestart + "&amp;end=" + frontmatter.youtubeend + "&amp;loop=1&amp;mute=" + frontmatter.youtubemute + "&amp;playsinline=1&amp;playlist=" + frontmatter.youtuber + ""
  return (
    <ReactPlayer
    className='react-player66'
    url={Url}
    
    // url={[
    //   iframeUrl,
    //   YoutuberSuggestion1,
    //   YoutuberSuggestion2,
    //   YoutuberSuggestion3
    // ]}
    width="100%"
    height="100%"

    config={{
      youtube: {
        playerVars: { showinfo:1, autoplay:YouTubeAutostart, controls:YouTubeControls, start:YouTubeStart, end:YouTubeEnd, mute:YouTubeMute  }
      },
    }}
    loop
    playing
    playsinline
      playIcon={
        <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'0px solid red', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'center', justifyContent:'center', alignItem:'center', paddingTop:''}}>

    <div className="" style={{ textAlign:'center', animation:'fadeIn 3s', width:'80vw', margin:'0 auto'}}>
    

      <div style={{position:'relative', maxWidth:'100vw', margin:'4% 0', zIndex:'0', display:'flex', justifyContent:'center', background:'transparent !important',}}>
<img className="homepage-bg" src={iconimage} width="300px" height="150px" alt="VidSock" style={{ width:'100%', maxWidth:'30vw', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />
</div>

      <span style={{fontWeight:'bold', padding:'0 0 0 0', fontSize:'2rem'}}>Click To Play</span>
<ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} />
      </div>
      </button>}
        light="../assets/transparent.png"
    />
  )
}


// const options = {
//   settings: {
//     autoplaySpeed: 4000,
//     boxShadow: '0px 0px 20px #000',
//     disableKeyboardControls: false,
//     disablePanzoom: false,
//     disableWheelControls: true,
//     hideControlsAfter: false,
//     lightboxTransitionSpeed: 0.3,
//     lightboxTransitionTimingFunction: 'linear',
//     overlayColor: 'rgba(0, 0, 0, 0.8)',
//     slideAnimationType: 'slide',
//     slideSpringValues: [300, 50],
//     slideTransitionSpeed: 0.6,
//     slideTransitionTimingFunction: 'linear',
//     usingPreact: false
//   },
//   buttons: {
//     backgroundColor: '#FA02B7',
//     iconColor: 'rgba(255, 255, 255, 0.8)',
//     iconPadding: '10px',
//     showAutoplayButton: false,
//     showCloseButton: true,
//     showDownloadButton: false,
//     showFullscreenButton: false,
//     showNextButton: false,
//     showPrevButton: false,
//     showThumbnailsButton: false,
//     size: '40px'
//   },
//   caption: {
// captionAlignment: 'start',
// captionColor: '#FFFFFF',
// captionContainerPadding: '20px 12% 30px 12%',
// captionFontFamily: 'inherit',
// captionFontSize: 'inherit',
// captionFontStyle: 'inherit',
// captionFontWeight: 'inherit',
// captionTextTransform: 'inherit',
// showCaption: false
//   },
//   thumbnails: {
//     showThumbnails: false,
//     thumbnailsAlignment: 'center',
//     thumbnailsContainerBackgroundColor: '#111',
//     thumbnailsContainerPadding: '0',
//     thumbnailsGap: '0 2px',
//     thumbnailsIconColor: '#ffffff',
//     thumbnailsOpacity: 0.4,
//     thumbnailsPosition: 'bottom',
//     thumbnailsSize: ['100px', '80px']
//   },
//   progressBar: {
//     backgroundColor: '#000',
//     fillColor: '#333',
//     height: '3px',
//     showProgressBar: true
//   },
// };
  
  return (

    <Layout>
    <Helmet>
  <body className="homepage" style={{background:''}} />
</Helmet>
{/* <Seo
          title={`VidSock - Video Multimedia NFT Platform`}
          description={`Create, display and market your NFTs with VidSock`}
          image={'https://vidsock.com/default-og-image.jpg'}
        /> */}
       <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
  //       image={photoUrl}
  //  photoUrl

   image={ siteUrl + getSrc(frontmatter.featuredImage) }
/>
      




{/* VIDEO URLS */}
{/* uCf3Q43fC_4 cool train */}







{ShowFeature ? (
<>
<div className="RArrow"><span></span></div>
<div className="horizontal-holder allin60panel" style={{position:'relative',  overflow:'', color:'#ccc', border:'1px solid transparent'}}>



<div className="horizontal-scroll panels" style={{}}>




<div className="panelspacer" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'', height:'50%', paddingTop:'50%', background:''}}></div>

<div id="" className="wrap-element " style={{overflow:'', width:'100vw', height:'85vh', position:'relative', top:'0', zIndex:'', marginBottom:''}}>


{/* <div style={{position:'absolute', objectFit:'', top:'0', zIndex:'-1', placeContent:'', background:'#111', width:'100vw', height:'100vh'}}>
          {Image ? (
            <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'fixed', top:'0', zIndex:'', objectFit:'cover', overflow:'', backgroundSize:'cover', border:'0px solid red !important', background:'#111', aspectRatio:'none'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )}
</div> */}


<ReactPlayer
            ref={playerRef}
            width="100%"
            height="100%"
            style={{position:'absolute', zIndex:'-1'}}
            url={YouTube}
            // url="https://www.youtube.com/embed/videoseries?list=PLSld2C-SHcw6iI-8VdTwswUmghftk2chW"
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            muted={muted}
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
              youtube: {
                playerVars: { showinfo:0, autoplay:1, controls:0, start:10, end:2000, mute:1  }
              },
            }}

            playsinline
            playIcon={
              <button aria-label="Click To Play" className="clickplay" style={{position:'absolute', zIndex:'5', top:'0', border:'1px solid transparent', width:'100vw', height:'100%', background:'', color:'#fff', fontSize:'18px', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'', justifyContent:'center', alignItem:'center', paddingTop:''}}>

            
  
            <div style={{position:'fixed', width:'100vw', height:'', top:'5px', margin:'0', zIndex:'1', display:'flex', justifyContent:'center', background:'transparent !important',}}>
    {/* <img className="homepage-bg" src="../../assets/daniel-smyth-PcvlAQKAPXk-unsplash.jpg" alt="Hytron" style={{ width:'100%', height:'100vh', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} /> */}

    <StaticImage placeholder="blurred" loading="eager" src="../../static/assets/daniel-smyth-PcvlAQKAPXk-unsplash.jpg" alt="Twilightscapes Default Image" style={{ width:'100%', height:'100%', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}} />

    {/* {Image ? (
  <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{ width:'100%', height:'100vh', filter:'drop-shadow(2px 2px 2px #000)', background:'transparent !important',}}
            />

          ) : (
          ""
          )} */}


  </div> 



  {/* {Image ? (
  <GatsbyImage
              image={Image}
              loading="eager"
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'100vh', width:'100vw', maxHeight:'', position:'absolute', top:'0', zIndex:'', objectFit:'cover', overflow:'', backgroundSize:'cover', border:'0px solid red !important', background:'#111', aspectRatio:'none'}}
            />

          ) : (
          ""
          )} */}

        
            <div style={{display:'grid', placeContent:'center', fontWeight:'bold', padding:'50% 0 0 0', fontSize:'clamp(1.4rem, 3.5vw, 3.8rem)', width:'100%', position:'absolute', zIndex:'2', top:'', height:'100%', border:'1px solid transparent'}}>Learn more about Hytron

    <ImPlay style={{margin:'0 auto', width:'50%', fontSize:'60px'}} /></div>
            {/* </div> */}


            </button>}
        //  light="../assets/transparent.png"
          />
          



          {/* <div style={{position:'absolute', width:'100vw', height:'100vh', top:'5px', margin:'0', zIndex:'-1', display:'flex', justifyContent:'center', background:'transparent !important',}}>
  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}
  </div> */}





          {/* <div style={{position:'relative', padding:'10% 0', width:'', height:'', zIndex:'3'}}>
<h1
    className="lineOne"
    style={{
     color: 'white',
      textAlign: 'center', 
      letterSpacing: '.0rem',
      fontSize:'clamp(1rem, 3.5vw, 3.8rem)',
      filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
      textShadow:'2px 2px 0 #333'
    }}
  >
    Quality Manufacturing
  </h1>

<h2
          className="boom3 normal txtshadow-header lineTwo"
          style={{
            color: '#fff',
            textAlign: 'center', 
            fontSize:'clamp(1rem, 3.5vw, 3.8rem)',
            filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
            textShadow:'2px 2px 0 #333'
          }}
        >
         Precision Parts
        </h2>

<h3
          className="boom4 txtshadow-header mobile-txt lineThree"
          style={{
           color: 'white',
            textAlign: 'center',
            textTransform: 'normal', 
            fontSize:'clamp(1rem, 3.5vw, 3.8rem)',
            filter:'dropShadow(1px 2px 4px rgba(0,0,0,.9))',
            textShadow:'2px 2px 0 #333'
          }}
        >
         Done right AND on time
        </h3>
</div> */}









          
          </div>



          {/* <Controls
            ref={controlsRef}
            onPlayPause={handlePlayPause}
            playing={playing}
            played={played}
            onMute={hanldeMute}
            muted={muted}
          />


          {/* show feature */}
        











{/* <div className="custom-cursor " style={{margin:'', height:'100%', textDecoration:'none'}}>

  <Panel1 />

</div> */}


{/* <div>
<StaticImage className=""
alt="Delicious!" src="../../static/assets/FAROE-ISLAND-SALMON-scaled.jpg" />
</div> */}



{/* <div>
<StaticImage className=""
alt="Get Racked at the Rack House" src="../../static/assets/NEW-ZEALAND-RACK.jpg" />
</div> */}



{/* <div>
<StaticImage className=""
alt="" src="../../static/assets/HICKORY-SMOKED-OF-WS.jpg" />
</div> */}




{ShowPosts ? (
        <BlogListHome data={posts} style={{}} />
   ) : (
    ""
  )}

<div>
</div>

{/* <div className="allin60panel" style={{position:'', border:'0px solid yellow', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', height:'100%', margin:'0', background:''}}>
<div style={{ width:'90vw', position:'relative', top:'', margin:'20px auto', padding:'4% 5%', zIndex:'3', textAlign:'', borderRadius:'12px', textDecoration:'none', color:'#cccc'}}>
  <Newsignup />
  </div>
</div> */}

</div>


</div>
</>
) : (
  ""
)}







<div id="intro" name="container21" className="container21" style={{position:'relative', zIndex:'1', paddingTop:'0'}}>

<div className="" style={{textAlign:'center', padding:'1rem', marginTop:'-30px' }}>
      <Link state={{modal: true}} to="/contact/" className="button specialfont" style={{display:'flex', alignSelf:'center', margin:'2.5rem auto', textDecoration:'none', fontSize:'clamp(1rem, 2vw, 2.8rem)', maxWidth:'40vw',}}>Request Quote</Link>
 </div>

{/* show feature */}
        {ShowFeature ? (
            
       
          


        
<section style={{ display:'',}}>
  <article>

  <div className='stack-layout' style={{ display:'', position:'relative', top:'0', zIndex:'0', height:'', overflow:'hidden', filter: 'drop-shadow(0 0 20px #000)' }}>




{/* {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image1 layer1"
              style={{height:'auto', width:'100vw', maxHeight:'', position:'absolute', top:'', zIndex:'0', objectFit:'contain', overflow:'', border:'0px solid red !important'}}
            />
            
          ) : (

   
            <StaticImage src="../../static/assets/default-og-image.jpg" alt="Twilightscapes Default Image" style={{height:'auto', maxHeight:'100vh', position:'absolute', zIndex:'0', top:'0',border:'0px solid !important', objectFit:'contain',}} />
  
          )} */}






{/* if(navigator.standalone) {
    "Thanks for using our PWA!"
} else {
    "Please consider downloading our PWA."
} */}





 

  {Svg ? (
            <AddSvg />
       
          ) : (
            ""
          )}





{/* {UnderlayImage ? (
            <GatsbyImage
              image={UnderlayImage}
              alt={frontmatter.title + " - image"}
              className="mcboaty"
              style={{height:'auto', width:'100vw', maxHeight:'100vh', position:'absolute', bottom:'0', zIndex:'1',
             objectFit:'contain', border:'0px solid red !important'}}
            />
            
          ) : (
            ""
          )} */}


  
{YouTube ? (
            <Iframer />
       
          ) : (
            ""
          )}




      </div>
  </article>
</section>

) : (
  ""
)}
{/* end show feature */}




<br /><br />

{/* show Info */}
{ShowInfo ? (
            
       


<section style={{ display:'', height:'', overflow:''}}>
  <article>
<div className="flexbutt" style={{display:'flex', gap:'30px'}}>
      <div className="flexcheek " style={{padding:'1rem 2rem 0 2rem', maxHeight:'90vh',}}>


      <h1 className="title1" style={{textAlign:'left', marginLeft:'1rem'}}>
            {frontmatter.title}
            {/* Today's Popular Subjects <br /> */}
            {/* The Rack House */}
          </h1>
          {/* <h2
            className="tagline1"
            sx={{
              color: "",
            }}
          >
            {frontmatter.tagline}
          </h2> */}





          <div
          style={{padding:'0 8% 0 4.5%', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
          />


  
<br />
          {/* <Link state={{modal: true}} 
            to={frontmatter.cta.ctaLink}
            className="button fire actionJackson specialfont"
            style={{
              cursor:'pointer',
              width:'80%',
              maxWidth:'600px',
              margin:'0 auto',
              display:'flex',
              alignSelf:'center',
              color:'#ccc',
              fontSize:'130%'
            }}
          >
            {frontmatter.cta.ctaText}
   

            

          </Link> */}

         


{/* <AnchorLink 
className="actionJackson txtshadow"
style={{
  cursor:'pointer',
  width:'70%',
  margin:'0 auto'

}} 
to="#experiences" title="See the new EXPERIENCES™" /> */}




{/* <span className="actionJackson txtshadow"> <span className="icon -right">
              <FaHandPointDown />
            </span> &nbsp;&nbsp;All New EXPERIENCES &nbsp;&nbsp;<span className="icon -right">
              <FaHandPointDown />
            </span></span> */}
          


      </div>



        


      <div className="flexcheek" style={{position:'relative', maxHeight:'50vh', overflow:'', marginBottom:'', borderRadius:'0 0 12px 12px'}}>
 
 


 <div style={{margin:'0 30px', zIndex:'', borderRadius:'12px', maxHeight:'', overflow:'', position:'relative', display:'', justifyContent:'', alignItems:'', flexDirection:'column'}}>
   





           {SecondaryImage ? (
            <GatsbyImage
              image={SecondaryImage}
              alt={frontmatter.title + " - Featured image"}
              className="post-card"
              style={{border:'0px solid red', width:'100%', height:'', maxHeight:'70vh',  borderRadius:'12px', position:'', backgroundSize:'', objectFit:'', top:'0', zIndex:'0'}}
            />
          ) : (
            ""
          )}





{/* <div style={{position:'relative', top:'', margin:'0', padding:'25% 0',  width:'', zIndex:'1', textAlign:'', borderRadius:'12px',}}>
  <Newsignup />
  </div> */}



{/* <ScrollAnimation animateIn="bounceInDown" delay={350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} >
<div style={{position:'relative', top:'0px', paddingRight:'', border:'0px solid yellow', zIndex:'0'}}>
  <h2
  className="title1 txtshadow-header"
  style={{


   position: 'relative',
    textAlign: 'center', 
    float: 'none',
    margin:'1rem 0 0 0',
    padding:'0',
  }}
>
Only Available<br />
Through NFT
</h2>
</div>
</ScrollAnimation> */}



{/* <div style={{fontSize:'120%', textAlign:'center', margin:'1rem', textShadow:'2px 2px 0 #000'}}><Link state={{modal: true}} to="/about/">Learn More About The VidSock Platform Here</Link></div> */}

</div>

      
      







      </div> 
</div>
</article>
</section>


) : (
  ""
)}
{/* end show Info */}



{/* <div style={{textAlign:'center', fontSize:'5vw', margin:'10vh 0 0 0'}}>Latest Minutes:</div> */}




{/* end show Posts */}
{/* {ShowPosts ? (

<div id="posts" name="posts">
  
 
        <BlogListHome data={posts} />


       
        
        <div style={{textAlign:'center'}}><Link className="post-card button " to="/minutes/" style={{textDecoration:'none', color:'inherit', textAlign:'center'}}>More Minutes <RiArrowRightSLine style={{fontSize:'50px'}} /></Link>
        </div>



 

  
</div>

   ) : (
    ""
  )} */}
{/* end show Posts */}


 </div>{/* end scooch */}

      

 










<div id="capabilities" className="" style={{position:'relative', zIndex:'2', textAlign:'', padding:'clamp(1rem, 8%, 15%)', fontSize:'clamp(1rem, 2vw, 2.8rem)', margin:'20px auto 0 auto', maxWidth:'1600px'}}>


<h2 style={{fontSize:'4vw', textAlign:'center', marginBottom:'1.5rem'}}>Our Capabilities</h2>


<div className="flexbutt noexit print" style={{padding:'0',
position:'relative', height:'', width:'', overflow:'', display:'flex', gap:'20px', margin:'0 auto 2rem auto', }}>








<div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:''}}>
    <AnchorLink className="" to="#iso" style={{textDecoration:'none', textAlign:'center', color:'inherit',}}>
    {Capability1 ? (
            <GatsbyImage
              image={Capability1}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
          <div className="specialfont2" style={{fontSize:'clamp(2rem, 3vw, 3rem)', position:'absolute', top:'40%', width:'100%', textAlign:'center', textShadow:'2px 2px 1px #333', background:'rgba(0, 0, 0, .6)', color:'#ccc'}}>ISO 9001 Certified</div>
    </AnchorLink>
    {/* <br />
    Our menu is steep in the traditions of the great steakhouses of America, however at virtually every step we have added our own "Rack House style" flair. We focus on providing a fantastic steak. */}
    </div>


    
    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:''}}>
    <AnchorLink className="" to="#about" style={{textDecoration:'none', color:'inherit',}}>
    {Capability2 ? (
            <GatsbyImage
              image={Capability2}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
          <div className="specialfont2" style={{fontSize:'clamp(2rem, 3vw, 3rem)', position:'absolute', top:'40%', width:'100%', textAlign:'center', textShadow:'2px 2px 1px #333', background:'rgba(0, 0, 0, .6)', color:'#ccc'}}>
            Learn About Hytron</div>
    </AnchorLink>
    {/* <br />
    Our mezzanine level of the Rack House was designed to be a place to sit back in a comfy couch, leather chair, or at the bar with friends and enjoy a unique atmosphere and great libations. */}
    </div>



    <div className="flexcheek network" style={{height:'', margin:'', display:'flex', flexDirection:'column', justifyContent:'flex-start', pointerEvents:''}}>
    <AnchorLink className="" to="#equipmentlist" style={{textDecoration:'none', color:'inherit'}}>
    {Capability3 ? (
            <GatsbyImage
              image={Capability3}
              alt="Image Alt Text"
              className=""
              style={{borderRadius:'8px'}}
            />
          ) : (
            ""
          )}
          <div className="specialfont2" style={{fontSize:'clamp(2rem, 3vw, 3rem)', position:'absolute', top:'40%', width:'100%', textAlign:'center', textShadow:'2px 2px 1px #333', background:'rgba(0, 0, 0, .6)', color:'#ccc'}}>
            Our Equipment List</div>
    </AnchorLink>
    {/* <br />
    Join the Bourbon Society and you get to enjoy plenty of perks such as a personalized decanter, exclusive access to coveted bourbons, monthly tastings and so much more! */}
    </div>


</div>







<h2 style={{fontSize:'3vw'}}>Quality Management System</h2>

<p>Hytron’s Quality Management System (QMS) is <a style={{textDecoration:'underline'}} href="../Hytron-Cert-AS9100D-with-ISO-9001-exp2024-AS6.pdf" title="View Certification" target="_blank">ISO 9001:2015 and AS9100D certified</a> which is the standard for the aerospace, aviation, space and defense industries. As a certified contract manufacturer, this certification underscores out commitment to quality and on-time delivery of the products and services we provide to our customers.</p>

<p>With our Haas CNC machining centers, Hytron provides precision CNC machining of numerous materials, including stainless steel and aluminum machining. We specialize in precision milling and turning while also providing other machining services, which cover the entire production process such as  conventional milling, drilling, turning, and sawing, as well as grinding and honing, deburring, and part marking. With our approved, certified suppliers, we can also provide heat treating, welding, plating, and painting.</p>

<p>We specialize in small to medium sized parts in many different quantities. From one-piece short run prototypes to very large volume production. Whether your part contains one component or many, needs special processing or assembly capabilities, our production team can take your project from conception to production. We are the trusted go-to source for the aerospace, medical, commercial, military, and computer industries for over 55 years in business.  Let our dedicated team take your vision/concept and make it a reality.</p>

<p>We have built a long standing reputation as a manufacturer of precision products that are field proven and time tested.  Contact one of our professionals for information on your specific manufacturing requirements.</p>
</div>






<div id="equipmentlist" className="specialfont2" style={{textAlign:'',  margin:'10vh auto 0 auto', position:'relative', zIndex:'1', maxWidth:'90vw',}}>
<Details />
</div>







<div id="iso" className="specialfont" style={{textAlign:'center', fontSize:'3vw', margin:'10vh auto 0 auto', maxWidth:'80vw', position:'relative', zIndex:'1'}}>
ISO 9001:2015 and AS9100D certified
  <a href="../Hytron-Cert-AS9100D-with-ISO-9001-exp2024-AS6.pdf" target="_blank" className="" style={{margin:'', textDecoration:'none'}}>
  <StaticImage src="../../static/assets/iso-cert.jpg" alt="Twilightscapes Default Image" style={{height:'auto', position:'', zIndex:'', top:'',border:'6px solid !important', borderRadius:'12px', objectFit:'contain',}} />
</a>
</div>
<br /><br />










<div id="about" className="" style={{textAlign:'',  margin:'10vh auto 0 auto', position:'relative', zIndex:'1', maxWidth:'90vw', fontSize:'clamp(1rem, 2vw, 2.8rem)',}}>


<h2 style={{fontSize:'4vw', textAlign:'center', marginBottom:'1.5rem'}}> About Hytron</h2>



<div style={{display:'flex', justifyContent:'flex-start', alignItems:'', position:'relative', width:'100%', height:'100%'}}>
<StaticImage src="../../static/assets/hytron-facility.jpg" alt="Twilightscapes Default Image" style={{height:'auto', position:'relative', zIndex:'0', top:'', borderRadius:'12px', objectFit:'cover', margin:'1rem 0'}} />
<Link state={{modal: true}} to="/location/"><StaticImage src="../../static/assets/map.png" alt="Twilightscapes Default Image" style={{height:'100%', position:'absolute', zIndex:'1', top:'5px', left:'20px', borderRadius:'12px', maxHeight:'15vh', maxWidth:'20vw', margin:'1rem 0', border:'2px solid #ff0000'}} /></Link>


<Link className="button specialfont2" state={{modal: true}} to="/careers/" style={{position:'absolute', zIndex:'1', bottom:'5px', right:'20px',}}>CAREERS @ Hytron</Link>
</div>



<h3 style={{margin:'1rem 0'}}>Hytron Manufacturing Inc.</h3>



<p>Founded in 1963, Hytron manufactures superior quality precision metal components to some of the most diverse industries in the global marketplace throughout the world. We utilize the latest in computer integrated manufacturing technology to ensure the highest level of precision, quality and efficiency in conformance with customer requirements.</p>


<p>Hytron Manufacturing produces a wide variety of products ranging from complex machined components to multi-part, custom engineered fabrications and assemblies. We specialize in high precision mill and lathe work at our 13,000 square foot state-of-the-art manufacturing facility.</p>

<p>For over 55 years we have serviced the diverse needs of major industries. Hytron understands how to produce quality products in less time and for less money.</p>
</div>











<div id="industries" className="" style={{position:'relative', zIndex:'2', textAlign:'', padding:'0', fontSize:'clamp(1rem, 2vw, 2.8rem)', margin:'10vh auto 0 auto', maxWidth:'80vw'}}>
<h2 style={{fontSize:'4vw', textAlign:'center', marginBottom:'1.5rem'}}>How can Hytron help your company?</h2>

<p>At Hytron, we will provide you with world-class machining, milling and turning services. Our highly trained team of machinists use our state-of-the-art, high-precision CNC machines to manufacture incredible components trusted for their high quality and reliability.</p>

<p>We are proud to support some of the largest industries in the world who are globally recognized market leaders including aerospace/defense, semiconductor,
electronics/telecom, military/government, and medical to mention a few. We have been privileged to have long-term relationships with many of our partners in these industries.</p>


<h3>Learn More</h3>
<p>With our experienced team and advanced manufacturing capabilities, we can become your perfect supply chain partner.</p>

<p>Request a quote to learn more about our services.</p>
</div>





<div id="contact" className="" style={{position:'relative', zIndex:'2', maxWidth:'', display:'grid', placeContent:'center', marginTop:'20vh'}}>
<h2 style={{fontSize:'3vw', textAlign:'center'}}>Contact Hytron</h2>
<Contact />
</div>





<Footer />
    </Layout>
  )
}

export default HomePage
  

