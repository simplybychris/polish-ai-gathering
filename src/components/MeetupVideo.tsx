const MeetupVideo = () => {
  return (
    <section className='tech-pattern pt-12 flex justify-center items-center'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/1jyqjWCsZTs?si=hZvfCNVDz4j2aJAK'
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
