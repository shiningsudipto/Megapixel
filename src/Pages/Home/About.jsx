import image from '../../assets/megapixel-frame1.jpg'
import image1 from '../../assets/megapixel-frame3.jpg'
import image2 from '../../assets/megapixel-frame4.jpg'
import image3 from '../../assets/megapixel-frame5.webp'
import SectionTitle from '../../components/SectionTitle';
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div>
            <div>
                <Slide direction='up'>
                    <SectionTitle
                        heading={"About Us"}
                        subHeading={"Read More About Megapixel"}
                    ></SectionTitle>
                </Slide>
            </div>
            <div className='container mx-auto'>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5">
                    <div className='lg:p-0 px-3'>
                        <Slide>
                            <h3 className='text-xl font-semibold text-fuchsia-500 mb-3'>A short overview about us.</h3>
                        </Slide>
                        <Fade delay={400}>
                            <div>
                                <p>Welcome to Megapixel, your ultimate online destination for photography education! At Megapixel, we are passionate about helping photography enthusiasts like you unleash their creative potential and capture breathtaking moments.</p>
                                <p>Through our comprehensive platform, we offer a diverse range of photography classes led by renowned experts in their respective fields. Whether you're a beginner or an experienced photographer, Megapixel has something for everyone. Our classes cover various categories, including Landscape Photography, Documentary/Photojournalism, Portrait Photography, Fashion Photography, Wildlife Photography, and Social Documentary Photography.</p>
                                <p>By joining Megapixel, you gain access to a vibrant community of like-minded individuals who share your passion for photography. Connect with fellow students, exchange ideas, and receive valuable feedback to enhance your skills.</p>
                                <p>With Megapixel, you can learn at your own pace and from the comfort of your home. Our user-friendly platform provides an immersive learning experience, complete with interactive lessons, practical assignments, and feedback from instructors.</p>
                                <p>Unlock your photography potential with Megapixel and embark on a transformative learning experience today. Let your passion for photography flourish and see the world through a new lens!</p>
                            </div>
                        </Fade>


                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-4'>
                        <Slide direction='up' cascade fraction={0}>
                            <img className='lg:h-[210px] md:w-full border p-3 border-fuchsia-600' src={image} alt="" />
                        </Slide>
                        <Slide direction='up' cascade delay={200} fraction={0}>
                            <img className='lg:h-[210px] md:w-full border p-3 border-fuchsia-600' src={image1} alt="" />
                        </Slide>
                        <Slide direction='up' cascade delay={400} fraction={0}>
                            <img className='lg:h-[210px] md:w-full border p-3 border-fuchsia-600' src={image2} alt="" />
                        </Slide>
                        <Slide direction='up' cascade delay={600} fraction={0}>
                            <img className='lg:h-[210px] md:w-full border p-3 border-fuchsia-600' src={image3} alt="" />
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;