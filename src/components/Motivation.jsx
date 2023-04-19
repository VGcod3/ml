import {
    Box
} from "@chakra-ui/react";
import { motion } from "framer-motion";


import useAnimateInView from "../UseAnimateHook";

const Motivation = () => {
    const animations = [];
    const animationSetup = {
        initial: { opacity: 0, y: 50 },
        desired: { opacity: 1, y: 0 },
        transition: { duration: 1, ease: "easeOut" },
    };

    for (let i = 0; i < 12; i++) {
        animations[i] = useAnimateInView(animationSetup);
    }

    return (
        <>
            <Box className="px-10 min-h-screen flex flex-col my-11 justify-center gap-12 backdrop-blur-md" id="ejc">
                <motion.h2
                    ref={ animations[0].ref }
                    animate={ animations[0].controls }
                    className="text-4xl font-bold mb-4 text-indigo-500"
                >
                    Початок, певно
                </motion.h2>
                <motion.p
                    ref={ animations[1].ref }
                    animate={ animations[1].controls }
                    className="text-lg mb-4"
                >
                    Я довго думав як мочати МЛ, бо перше враження це важливо. І придумав я мотивацію, бо все на світі можна навчитися робити і зробити. Було би бажання. Отже, МОТИВАЦІЯ ЗАРІШАЄ.
                </motion.p>
                <motion.h2
                    ref={ animations[2].ref }
                    animate={ animations[2].controls }
                    className="text-4xl font-bold mb-4 text-blue-500"
                >
                    Чому ІЯК?
                </motion.h2>
                <motion.div
                    ref={ animations[3].ref }
                    animate={ animations[3].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>Поки інші чекають влучну можливість, я використовую кожну</p>
                    <p>
                        Хах, ото прикол. Як кажуть мудрі люди, і база знань, ІЯК - найбільший проект, який принесе фінансування у левову ччаску інших проектів. Отже, до цього і я можу прикласти руку. І я постараюся виконати свої обов’язки якнайкраще, внести певні ідеї в організації проекту в цілому, й поза ІТ. Бо кортім - це сім’я, конекшн який буде зв’язувати людей, що трудилися разом ще довго. Крім того, участь в кортімі більше інтегрує мене в організацію, дасть хороший авторитет серед Besties and Bestiemen♠️.
                    </p>
                </motion.div>
                <motion.h2
                    ref={ animations[4].ref }
                    animate={ animations[4].controls }
                    className="text-4xl font-bold mb-4 text-red-500"
                >
                    Нащо мені БЕСТ?
                </motion.h2>
                <motion.p
                    ref={ animations[5].ref }
                    animate={ animations[5].controls }
                    className="text-lg mb-4"
                >
                    Ще з самого початку сумніву не було, що BEST це те, частиною чого я хочу бути. Бо це про друзів, про розвиток себе і навколишніх, відпочинок і перспективу на майбутнє. Як я часто люблю казати, баланс для слабаків. Work hard, party harder! Більш конкретно, то тут я зможу реалізуватися в усіх бажаних сферах і ОДРАЗУ. Я про програмування, роботу в команді, волонтерство, лідерство і спілкування.
                </motion.p >
                <motion.h2
                    ref={ animations[6].ref }
                    animate={ animations[6].controls }
                    className="text-4xl font-bold mb-4 text-orange-500"
                >
                    Чому саме цю посаду?
                </motion.h2>
                <motion.div
                    ref={ animations[7].ref }
                    animate={ animations[7].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>
                        ІТ? Я респонсібл, відповідаю…
                    </p>
                    <p>
                        Бо ще з 1 січня якогось там року від  дня <span className="line-through">мого народження</span> народження Бандери я цікавився чимось точним, конкретним.
                    </p>
                    <p>
                        Існує лише 0 і 1. Все інше - відтінки.
                    </p>
                    <p>
                        Пишу код відколи я - це той самий Віктор, яким я себе усвідомлено знаю, з 14 років. Відтоді я займаюся фронтом🪖(отже, шишок і руку трохи вже набив). Це значить, що на цій посаді я зможу займатися тим, що вмію, і що дуже люблю. Також кльовим є те, що тут робота нешаблонна, тож за все відповідальний лише я. Основне, аби працювало, як має бути, і МО, команда і кінцеві користувачі були задоволені. Технологій, функціонал, графік роботи і про підхід в цілому залежать лише від мене.
                    </p>
                </motion.div >
            </Box >
            <Box className="px-10 my-12 min-h-screen flex flex-col justify-center gap-12 backdrop-blur-md" id="why_me">
                <motion.h2
                    ref={ animations[8].ref }
                    animate={ animations[8].controls }
                    className="text-4xl font-bold mb-4 text-green-500"
                >
                    Чому я?
                </motion.h2>
                <motion.div
                    ref={ animations[9].ref }
                    animate={ animations[9].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>
                        Бо як я вже казав, усьому віддаю свого себе. Але й мультизадачність ніхто не відміняв. Це означає, що робота буде виконана настільки добре, як я тільки зможу.
                    </p>
                    <p>
                        Можу впевнено про це говорити, бо в мене є вже певний досвід у роботі. З командою розробки пет-проектів виробилася звичка ділитися досвідом на коротких зідзвонах, працювати за scrum методикою, трекати задачі в trello або ж notion, пушити код на git, ну і ефективно проводити ретроспективу зробленого й планувати роботу на наступний спринт (в тому числі й комунікація з дизайнером і фронтенд командою).
                    </p>

                    <p>
                        Серед хард скілів - розробка клієтської частини  web-застосунків (React, TS, Chakra UI👌, Tailwind, RTK), ще трохи пекельної кухні (Express, MongoDB, Next), ну і робота з API Телеграму (пробував писати своїх ботів, взяємодіяти з цим API з web-клієнту), поки на node js.
                    </p>
                </motion.div>
                <motion.h2
                    ref={ animations[10].ref }
                    animate={ animations[10].controls }
                    className="text-4xl font-bold mb-4 text-yellow-500"
                >
                    І чим то я буду займатися?
                </motion.h2>
                <motion.div
                    ref={ animations[11].ref }
                    animate={ animations[11].controls }
                    className="text-lg mb-4 flex flex-col gap-4"
                >
                    <p>
                        Перш за все, (за дедлайном) - розробка брошури. Вже знаю що це, активно займався таким на coding night 1.
                    </p>
                    <p>
                        Далі - розробка сайту проекту. Тут все просто і зрозуміло, як нуль і один. Швидше за все, з інтерактивною картою проекту і, звичайно, pixel-perfect, з АНІМЕйшином.
                    </p>
                    <p>
                        Щодо ботів в ТГ, певний досвід і розуміння є. Тому перший етап роботи команди (поки контент і дизайн не готові) теж буде плідним для мене. Планую навчитися робити все те ж, але на python (c-подібні мови.. вони ж такі різні). Дякую Ярославу)))
                    </p>
                    <p>
                        Паралельно (привіт, мультизадачність) - тг інфраструктура. Це взаємодія компаній і учасників, поширення CV, розклад заходу та інша дотична інфа.
                    </p>
                    <p>
                        Крім того, спробую організувати ARG (щось типу cicada 3301) в онлайні і аналог #WienerGame в офлайні. З блекджеком, qr-кодами, тасками і винагородами. Це непогано так підніме актив і допоможе в PR-і.
                    </p>
                    <p>
                        А поки чекаю на результат роботи дизайнера та контент команди, можна організувати шерінг для ІТ-відділу (на тему git, наприклад) для того, щоб максимально використати час, зробити подальшу роботу в команді плідною.
                    </p>
                </motion.div>
            </Box>
        </>
    );
};

export default Motivation;