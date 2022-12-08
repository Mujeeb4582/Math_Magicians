import React from 'react';

const Home = () => {
  const homeStyle = {
    padding: '20px 40px',
    lineHeight: '1.5em',
  };

  const paragraphStyle = {
    textAlign: 'justify',
  };

  return (
    <div style={homeStyle}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '600',
        marginBottom: '2rem',
        lineHeight: '1em',
        color: '#0c2c4c',
      }}
      >
        Welcome to our page!
      </h1>
      <p style={paragraphStyle}>
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod accusamus. Tempore officia repellendus consectetur voluptatem a, iste, obcaecati natus nulla quis distinctio eum quae fuga? Eveniet aliquid ullam nesciunt, voluptate illum voluptates dolor animi temporibus! Aut consequuntur exercitationem ducimus, rem numquam hic officia illo qui, illum praesentium minus quis doloribus, assumenda ratione. Qui maxime fugiat iusto optio ducimus cum neque, amet iste architecto praesentium unde corrupti tempore, ut, nihil laudantium labore? Ut suscipit quae magni corporis beatae nam harum atque aspernatur distinctio cumque quibusdam dignissimos ratione sint ea, aut, amet tenetur, totam quo. Exercitationem ipsum quam deserunt neque veniam.
      </p>
      <p style={paragraphStyle}>
        {/* eslint-disable-next-line max-len */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed hic esse sapiente mollitia ea laudantium asperiores dicta amet quod vel autem molestiae, nemo expedita porro similique, ipsa aliquam officia in aspernatur cupiditate nesciunt doloremque necessitatibus? Totam dolore voluptas, nihil, laboriosam dolorem laudantium, perferendis dolor itaque dolorum molestiae laborum? Architecto, totam?
      </p>
    </div>
  );
};
export default Home;
