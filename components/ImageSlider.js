import Image from 'next/image';

export default function ImageSlider({ data }) {
  return (
    <div className='slide-container'>
      <div className='slide-track'>
        {data.map((slide, index) => {
          return (
            <div className='slide-img' key={index}>
              <Image
                src={slide}
                layout='fill'
                objectFit='cover'
                alt={`client ${index + 1}`}
                className='image'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
