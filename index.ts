import { Trie} from "./Trie";

const trie = new Trie();

const technos = [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Vue",
    "Angular",
    "Node.js",
    "Express",
    "NestJS",
    "SQL",
    "NoSQL",
    "SQLite",
    "Database",
    "Datascience",
    "Data Analysis",
    "Data Visualization",
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Python-Django",
    "Python-Flask",
    "Python-FastAPI",
];

trie.initialize(technos);

console.log(trie.search("D")); // true
console.log(trie.search("J")); // true
console.log(trie.search("j")); // true
console.log(trie.startsWith("Data")); // true
console.log(trie.startsWith("Deep")); // true
console.log(trie.findWords("Dat")); // ["Database", "Datascience", "Data Analysis", "Data Visualization"]
console.log(trie.findWords("Py")); // ["Python", "Python-Django", "Python-Flask", "Python-FastAPI"]
trie.print();