import image from '../../assets/megapixel-frame1.jpg'
import image1 from '../../assets/megapixel-frame3.jpg'
import image2 from '../../assets/megapixel-frame4.jpg'
import image3 from '../../assets/megapixel-frame5.webp'
import SectionTitle from '../../components/SectionTitle';
const About = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    heading={"About Us"}
                    subHeading={"Read More About Megapixel"}
                ></SectionTitle>
            </div>
            <div className='container mx-auto'>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
                    <div>
                        <h3 className='text-xl font-semibold text-fuchsia-500 mb-3'>A short overview about us.</h3>
                        <p>Welcome to Megapixel, your ultimate online destination for photography education! At Megapixel, we are passionate about helping photography enthusiasts like you unleash their creative potential and capture breathtaking moments.</p>
                        <p>Through our comprehensive platform, we offer a diverse range of photography classes led by renowned experts in their respective fields. Whether you're a beginner or an experienced photographer, Megapixel has something for everyone. Our classes cover various categories, including Landscape Photography, Documentary/Photojournalism, Portrait Photography, Fashion Photography, Wildlife Photography, and Social Documentary Photography.</p>
                        <p>By joining Megapixel, you gain access to a vibrant community of like-minded individuals who share your passion for photography. Connect with fellow students, exchange ideas, and receive valuable feedback to enhance your skills.</p>
                        <p>With Megapixel, you can learn at your own pace and from the comfort of your home. Our user-friendly platform provides an immersive learning experience, complete with interactive lessons, practical assignments, and feedback from instructors.</p>
                        <p>Unlock your photography potential with Megapixel and embark on a transformative learning experience today. Let your passion for photography flourish and see the world through a new lens!</p>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-4'>
                        <img className='lg:h-[210px] border p-3 border-fuchsia-600' src={image} alt="" />
                        <img className='lg:h-[210px] border p-3 border-fuchsia-600' src={image1} alt="" />
                        <img className='lg:h-[210px] border p-3 border-fuchsia-600' src={image2} alt="" />
                        <img className='lg:h-[210px] border p-3 border-fuchsia-600' src={image3} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;