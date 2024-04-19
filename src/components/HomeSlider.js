import Image from 'next/image';

export default function HomeSlider(){
    return (
        <div>
            <Image className='w-full h-[400]' width={1600} height={400} src="/Home/banner_01.png" />
        </div>
        
    )
}
