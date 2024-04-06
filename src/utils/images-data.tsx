import Link from "next/link";

import hero0 from "@/assets/images/hero-0.jpg";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";


export const heroImages = {
    hero0: {
        src: hero0,
        alt: "Pizza on brown wooden table",
        reference: <>Photo by <Link href="https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik Owens</Link> on <Link href="https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    hero1: {
        src: hero1,
        alt: "Italian sausage tortelloni alfredo mushrooms",
        reference: <>Photo on <Link href="https://olivieri.ca/recipes/italian-sausage-tortelloni-alfredo-mushrooms">Olivieri</Link></>
    },
    hero2: {
        src: hero2,
        alt: "Truffle Mushroom Pasta",
        reference: <>Photo by <Link href="https://www.pexels.com/photo/plate-of-pasta-2773940">Pixelme Stock Photography</Link></>
    },
    hero3: {
        src: hero3,
        alt: "Skillet gnocchi carbonara",
        reference: <>Photo on <Link href="https://olivieri.ca/recipes/skillet-gnocchi-carbonara">Olivieri</Link></>
    },
    hero4: {
        src: hero4,
        alt: "Beef ravioli with parmesan",
        reference: <>Photo on <Link href="https://www.perfectitaliano.com.au/en/recipes/beef-ravioli-with-parmesan.html">Perfect Italiano</Link></>
    },
};


// spicy: 0, vegan: 1, vegetarian: 2, gluten-free: 3

const data = [
    {
        "course": "antipasti",
        "category": "",
        "public_id": "bruschetta",
        "name": "Bruschetta",
        "reference": {
            "owner": "Shameel mukkath",
            "owner_url": "https://www.pexels.com/@shameel-mukkath-3421394/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/bruschetta-with-tomatoes-black-olives-and-basil-5639411/"
        },
        "description": "Toasted bread topped with tomatoes, black olives, and basil",
        "price": 12,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian"],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "crostini",
        "name": "Crostini",
        "reference": {
            "owner": "Farhad Ibrahimzade",
            "owner_url": "https://www.pexels.com/@farhad/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/a-assortment-of-crostinis-8743947/"
        },
        "description": "Four pieces of toasted bread topped with salami, salmon, zuccini, and tuna",
        "price": 16,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "caprese-salad",
        "name": "Caprese Salad",
        "reference": {
            "owner": "Bryony Elena",
            "owner_url": "https://unsplash.com/@b_elena?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/vegetable-salad-on-white-ceramic-plate-dJGeISqeEiw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Fresh tomatoes, mozzarella, and basil drizzled with balsamic glaze",
        "price": 15,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "antipasto-platter",
        "name": "Antipasto Platter",
        "reference": {
            "owner": "Eva Bronzini",
            "owner_url": "https://www.pexels.com/@eva-bronzini/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/antipasto-on-a-wooden-chopping-board-5975427/"
        },
        "description": "A selection of cured meats, biscuits, cheeses, olives, and pickles",
        "price": 18,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "arancini",
        "name": "Arancini",
        "reference": {
            "owner": "Shameel mukkath",
            "owner_url": "https://www.pexels.com/@shameel-mukkath-3421394/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/arancini-with-sauce-and-vegetables-5639804/"
        },
        "description": "Deep-fried risotto balls filled with mozzarella, peas, and tomato sauce",
        "price": 16,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "carpaccio",
        "name": "Carpaccio",
        "reference": {
            "owner": "Piotr Arnoldes",
            "owner_url": "https://www.pexels.com/@piotr-arnoldes-7862031/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/delicious-carpaccio-with-garlic-slices-and-toasts-6488856/"
        },
        "description": "Thinly sliced raw beef drizzled with olive oil, lemon juice, and capers, served with garlic slices and toasts",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "frittata",
        "name": "Frittata",
        "reference": {
            "owner": "Shameel mukkath",
            "owner_url": "https://www.pexels.com/@shameel-mukkath-3421394/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/a-close-up-shot-of-a-frittata-in-a-skillet-5639249/"
        },
        "description": "Italian-style omelette filled with potatoes, onions, and cheese",
        "price": 14,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian"],
        "online_available": 1,
    },
    {
        "course": "antipasti",
        "category": "",
        "public_id": "calamari-fritti",
        "name": "Calamari Fritti",
        "reference": {
            "owner": "Esperanza Doronila",
            "owner_url": "https://unsplash.com/@edoronila?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/a-white-plate-topped-with-onion-rings-and-a-bowl-of-dipping-sauce-Gc9O2ZozB4A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Deep-fried squid rings served with lemon wedges and garlic aioli",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "spaghetti-bolognese",
        "name": "Spaghetti Bolognese",
        "reference": {
            "owner": "Danijela Prijovic",
            "owner_url": "https://unsplash.com/@dacakockica?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/pasta-with-red-sauce-on-white-ceramic-round-plate-qits91IZv1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Spaghetti with a rich and meaty tomato sauce",
        "price": 18,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "spaghetti-carbonara",
        "name": "Spaghetti Carbonara",
        "reference": {
            "owner": "Zoran Borojevic",
            "owner_url": "https://unsplash.com/@fresh_studio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/pasta-dish-on-white-ceramic-plate--5FECW242og?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Spaghetti with pancetta, eggs, and cheese",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "spaghetti-aglio-e-olio",
        "name": "Spaghetti Aglio e Olio",
        "reference": {
            "owner": "Adrian Vieriu",
            "owner_url": "https://www.pexels.com/@printexstar/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/spaghetti-aglio-e-olio-with-chopped-basil-on-white-plate-11654236/"
        },
        "description": "Spaghetti with garlic, olive oil, chili flakes, and chopped basil",
        "price": 16,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegan", "vegetarian"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "lasagna-al-forno",
        "name": "Lasagna al Forno",
        "reference": {
            "owner": "Anna Guerrero",
            "owner_url": "https://www.pexels.com/@anna-guerrero-788383/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/lasagna-on-white-ceramic-plate-4079520/"
        },
        "description": "Layers of pasta sheets, Bolognese sauce, and Parmesan cheese baked to perfection",
        "price": 22,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "fettuccine-alfredo",
        "name": "Fettuccine Alfredo",
        "reference": {
            "owner": "Engin Akyurt",
            "owner_url": "https://www.pexels.com/@enginakyurt/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/traditional-italian-fettuccine-alfredo-pasta-on-ceramic-plate-11220208/"
        },
        "description": "Fettuccine in creamy sauce made with butter, heavy cream, and Parmesan cheese",
        "price": 18,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "tortellini-alla-panna",
        "name": "Tortellini alla Panna",
        "reference": {
            "owner": "logan jeffrey",
            "owner_url": "https://unsplash.com/@foodjetsexpress?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/white-pasta-on-white-ceramic-plate-QcMm7CtKbM8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Tortellini in creamy sauce made with heavy cream, ham, parmesan cheese, and egg yolks",
        "price": 22,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "pasta",
        "public_id": "ravioli-di-magro",
        "name": "Ravioli di Magro",
        "reference": {
            "owner": "Max Griss",
            "owner_url": "https://www.pexels.com/@max-griss-16866522/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/ravioli-with-spinach-13669035/"
        },
        "description": "Ravioli stuffed with spinach and ricotta cheese, served with butter and sage sauce",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "risotto",
        "public_id": "risotto-ai-funghi",
        "name": "Risotto ai Funghi",
        "reference": {
            "owner": "Max Griss",
            "owner_url": "https://www.pexels.com/@max-griss-16866522/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/photo-of-risotto-on-a-black-and-white-plate-6406460/"
        },
        "description": "Creamy risotto with mixed mushrooms, garlic, and Parmesan cheese",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "risotto",
        "public_id": "risotto-ai-fagioli-edamame",
        "name": "Risotto ai Fagioli Edamame",
        "reference": {
            "owner": "Alesia Kozik",
            "owner_url": "https://www.pexels.com/@alesiakozik/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/edamame-bean-risotto-in-ceramic-bowl-6544243/"
        },
        "description": "Creamy risotto with edamame beans, Parmesan cheese, shallots, and garlic",
        "price": 22,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "risotto",
        "public_id": "risotto-di-pomodori-secchi-e-burrata",
        "name": "Risotto di Pomodori Secchi e Burrata",
        "reference": {
            "owner": "Antony Trivet",
            "owner_url": "https://www.pexels.com/@antonytrivet/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/risotto-dish-on-white-ceramic-plate-14165875/"
        },
        "description": "Risotto with sun-dried tomatoes, burrata cheese, and basil",
        "price": 24,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "risotto",
        "public_id": "risotto-al-tartufo",
        "name": "Risotto al Tartufo",
        "reference": {
            "owner": "Julien Pianetti",
            "owner_url": "https://unsplash.com/@julienpian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/risotto-on-white-ceramic-plate-qIPRTMulc-g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Risotto with truffle oil, and Parmesan cheese, garnished with parsley and black truffle",
        "price": 26,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "gnocchi",
        "public_id": "gnocchi-alla-sorrentina",
        "name": "Gnocchi alla Sorrentina",
        "reference": {
            "owner": "Nathalie Klippert",
            "owner_url": "https://unsplash.com/@nathaliescontent?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/a-white-plate-topped-with-food-on-top-of-a-wooden-table-c8anfbnfPRo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
        },
        "description": "Potato dumplings baked with tomato sauce, mozzarella, and basil",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "primi",
        "category": "gnocchi",
        "public_id": "gnocchi-al-pesto",
        "name": "Gnocchi al Pesto",
        "reference": {
            "owner": "Karolina Grabowska",
            "owner_url": "https://www.pexels.com/@karolina-grabowska/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/green-gnocchi-on-white-ceramic-plate-6659553/"
        },
        "description": "Potato dumplings tossed in basil pesto sauce",
        "price": 18,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "secondi",
        "category": "carne",
        "public_id": "bistecca-alla-fiorentina",
        "name": "Bistecca alla Fiorentina",
        "reference": {
            "owner": "Ruslan Rozanov",
            "owner_url": "https://www.pexels.com/@ruslan-rozanov-174297693/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/sliced-meat-on-white-ceramic-plate-11531908/"
        },
        "description": "Grilled T-bone steak seasoned with olive oil, salt, and pepper",
        "price": 32,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 0,
    },
    {
        "course": "secondi",
        "category": "carne",
        "public_id": "costolette-di-agnello-scottadito",
        "name": "Costolette di Agnello Scottadito",
        "reference": {
            "owner": "Mayumi Maciel",
            "owner_url": "https://unsplash.com/@mayumimaciel?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/a-wooden-plate-topped-with-meat-on-top-of-a-wooden-table-5UkRSsJFxYw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/"
        },
        "description": "Grilled lamb chops seasoned with garlic, rosemary, and lemon",
        "price": 28,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 0,
    },
    {
        "course": "secondi",
        "category": "carne",
        "public_id": "pollo-arrosto",
        "name": "Pollo Arrosto",
        "reference": {
            "owner": "Claudio Schwarz",
            "owner_url": "https://unsplash.com/@purzlbaum?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/roasted-chicken-on-white-ceramic-plate-4qJlXK4mYzU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/"
        },
        "description": "Roast chicken seasoned with garlic, rosemary, and lemon",
        "price": 24,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 1,
    },
    {
        "course": "secondi",
        "category": "carne",
        "public_id": "braciola-di-maiale-alla-griglia",
        "name": "Braciola di Maiale alla Griglia",
        "reference": {
            "owner": "Alex Munsell",
            "owner_url": "https://unsplash.com/@alexmunsell?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/grilled-steak-with-vegetables-on-white-ceramic-plate-Yr4n8O_3UPc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/"
        },
        "description": "Grilled pork chop marinated in olive oil, garlic, and herbs, served with grilled vegetables",
        "price": 26,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 1,
    },
    {
        "course": "secondi",
        "category": "pesce",
        "public_id": "salmone-alla-griglia",
        "name": "Salmone alla Griglia",
        "reference": {
            "owner": "Bronze Digitals",
            "owner_url": "https://www.pexels.com/@bronzedigitals/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/baked-salmon-in-ceramic-plate-5741440/"
        },
        "description": "Grilled salmon fillet seasoned with olive oil, lemon, and herbs",
        "price": 26,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 0,
    },
    {
        "course": "secondi",
        "category": "pesce",
        "public_id": "cozze-al-limone-e-prezzemolo",
        "name": "Cozze al Limone e Prezzemolo",
        "reference": {
            "owner": "Christopher Carson",
            "owner_url": "https://unsplash.com/@bhris1017?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/shallow-focus-photography-of-seafoods-Ba2tmqEZiFk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/"
        },
        "description": "Mussels steamed in white wine, garlic, lemon juice, and parsley",
        "price": 24,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["gluten-free"],
        "online_available": 1,
    },
    {
        "course": "secondi",
        "category": "verdura",
        "public_id": "caponata",
        "name": "Caponata",
        "reference": {
            "owner": "Max Griss",
            "owner_url": "https://www.pexels.com/@max-griss-16866522/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/caponata-on-ceramic-plate-11999171/"
        },
        "description": "Sautéed eggplant, tomatoes, onions, olives, and capers",
        "price": 18,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegan", "vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "secondi",
        "category": "verdura",
        "public_id": "melanzane-alla-parmigiana",
        "name": "Melanzane alla Parmigiana",
        "reference": {
            "owner": "Nadin Sh",
            "owner_url": "https://www.pexels.com/@nadin-sh-78971847/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/eggplant-parmesan-dish-19295802/"
        },
        "description": "Layers of fried eggplant, tomato sauce, and Parmesan cheese baked to perfection",
        "price": 20,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegetarian"],
        "online_available": 1,
    },
    {
        "course": "secondi",
        "category": "verdura",
        "public_id": "zucchine-grigliate",
        "name": "Zucchine Grigliate",
        "reference": {
            "owner": "Natalia Gusakova",
            "owner_url": "https://unsplash.com/@nataliaraylenegusakova?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/",
            "platform": "Unsplash",
            "url": "https://unsplash.com/photos/a-plate-of-grilled-vegetables-on-a-table-OtUm8PKHMkI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash/"
        },
        "description": "Grilled zucchini seasoned with olive oil, garlic, and herbs",
        "price": 16,
        "unit": {
            "number": 1,
            "measurement": "portion",
        },
        "tags": ["vegan", "vegetarian", "gluten-free"],
        "online_available": 1,
    },
    {
        "course": "dolci",
        "category": "tiramisu",
        "public_id": "tiramisu",
        "name": "Tiramisu",
        "reference": {
            "owner": "Mehrdad Badr",
            "owner_url": "https://www.pexels.com/@mehrdadbadr/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/close-up-shot-of-a-tiramisu-dessert-12916029/"
        },
        "description": "Layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa",
        "price": 12,
        "unit": {
            "number": 1,
            "measurement": "piece",
        },
        "tags": [],
        "online_available": 1,
    },
    {
        "course": "dolci",
        "category": "cannoli",
        "public_id": "cannoli",
        "name": "Cannoli",
        "reference": {
            "owner": "Valeria Boltneva",
            "owner_url": "https://www.pexels.com/@valeriya/",
            "platform": "Pexels",
            "url": "https://www.pexels.com/photo/traditional-italian-dessert-on-plate-7474126/"
        },
        "description": "Crispy pastry shells filled with sweetened ricotta cheese",
        "price": 16,
        "unit": {
            "number": 3,
            "measurement": "piece",
        },
        "tags": ["vegetarian"],
        "online_available": 1,
    },
]