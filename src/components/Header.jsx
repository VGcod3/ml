import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay, Text
} from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from 'react-icons/fa';



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box
            as="header"
            className="flex justify-between items-center p-4 shadow-sm backdrop-filter backdrop-blur-lg  w-full z-20 fixed text-white"
        >
            <div className="flex items-center">
                <Text as="h2" className="text-4xl font-extrabold">
                    { "</>" }
                </Text>
                <h1 className="mx-5 text-2xl font-bold">RESP4
                    <span className='text-green-500'>
                        IT
                    </span>
                </h1>
            </div>

            <nav className="hidden md:flex">
                <ul className="flex list-none">
                    <li className="mx-4 font-bold">
                        <a href="#about_me">Про мене</a>
                    </li>
                    <li className="mx-4 font-bold">
                        <a href="#ejc">Чому ІЯК?</a>
                    </li>
                    <li className="mx-4 font-bold">
                        <a href="#why_me">Чому я?</a>
                    </li>
                    <li className="mx-4 font-bold">
                        <a href="#time">Чааас</a>
                    </li>
                </ul>
            </nav>

            <div className={ `md:hidden ${isOpen ? 'mr-[16px]' : ''}` }>
                <Button onClick={ toggleMenu } variant="ghost">
                    <FaBars size={ 24 } />
                </Button>
            </div>

            <Drawer isOpen={ isOpen } onClose={ toggleMenu } >
                <DrawerOverlay />
                <DrawerContent className="mt-[72px] pt-6 bg-green-500">

                    <DrawerBody >
                        <ul className="flex flex-col items-center list-none">
                            <li className="my-4 font-bold">
                                <a href="#about_me" onClick={ toggleMenu }>Про мене</a>
                            </li>
                            <li className="my-4 font-bold">
                                <a href="#ejc" onClick={ toggleMenu }>Чому ІЯК?</a>
                            </li>
                            <li className="my-4 font-bold">
                                <a href="#why_me" onClick={ toggleMenu }>Чому я?</a>
                            </li>
                            <li className="my-4 font-bold">
                                <a href="#time" onClick={ toggleMenu }>Чааас</a>
                            </li>
                        </ul>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </Box >
    );
};

export default Header;