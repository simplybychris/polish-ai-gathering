const MeetupVideo = () => {
  return (
    <section className='tech-pattern pt-12 flex justify-center items-center'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/u31qwQUeGuM?si=wohMXbC_WD_Kc-YD'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default MeetupVideo;
