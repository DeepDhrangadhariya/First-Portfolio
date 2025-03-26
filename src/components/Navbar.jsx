import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/DGlogo.webp'

const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-6">
            <div className="flex shrink-0 items-center">
                <a href="/" aria-label="Home">
                    {/* <img
                        src={logo}
                        alt="logo"
                        className='mx-2'
                        width={50}
                        height={33}
                    /> */}
                    <span className='mx-2 text-2xl' >DG </span>
                </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a
                    href="https://www.linkedin.com/in/deep-dhrangadhariya"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/DeepDhrangadhariya"
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default Navbar