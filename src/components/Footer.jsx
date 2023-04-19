const Footer = () => {
    return (
        <footer className="flex flex-col p-12 bg-green-500 text-white">
            <div className=" w-100 flex justify-evenly">
                <div className="text-sm flex flex-col gap-4">
                    <p className="flex flex-wrap gap-3">
                        Особлива подяка{ ' ' }
                        <span>
                            <a href="https://t.me/marrrkiv">@marrrkiv</a>
                        </span>{ ' ' }
                        <span>
                            <a href="https://t.me/popavs17">@popavs17</a>
                        </span>{ ' ' }
                        <span>
                            <a href="https://t.me/Yaroslav_Horodyskyi"> @Yaroslav_Horodyskyi </a>
                        </span>
                    </p>
                    <p>
                        Придумано, зроблено і задизанено Віктором не без допомоги нейронки
                    </p>

                </div>
                <div className="text-sm">
                    <p>Накоджено:</p>
                    <p>Chakra UI, Tailwind, React, Framer</p>
                </div>
            </div>
            <div className="text-center mt-7">
                &copy; 2023 Мої права точно захищено
            </div>
        </footer>
    );
};

export default Footer;