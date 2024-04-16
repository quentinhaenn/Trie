class TrieNode {
    public isWord: boolean;
    public children: Map<string, TrieNode>;

    constructor() {
        this.isWord = false;
        this.children = new Map();
    }
}

export class Trie {
    public root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    public insert(word: string): void {
        let node = this.root;
        word = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = <TrieNode>node.children.get(char);
        }
        node.isWord = true;
    }

    public search(word: string): boolean {
        let node = this.root;
        word = word.toLowerCase();
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                return false;
            }
            node = <TrieNode>node.children.get(char);
        }
        return node.isWord;
    }

    public startsWith(prefix: string): boolean {
        let node = this.root;
        prefix = prefix.toLowerCase();
        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!node.children.has(char)) {
                return false;
            }
            node = <TrieNode>node.children.get(char);
        }
        return true;
    }

    public delete(word: string): void {
        word = word.toLowerCase();
        this.deleteRecursive(this.root, word, 0);
    }

    private deleteRecursive(root: TrieNode, word: string, number: number) {
        if (number === word.length) {
            if (!root.isWord) {
                return;
            }
            root.isWord = false;
            return;
        }
        const char = word[number];
        if (!root.children.has(char)) {
            return;
        }
        const next = <TrieNode>root.children.get(char);
        this.deleteRecursive(next, word, number + 1);
        if (next.children.size === 0 && !next.isWord) {
            root.children.delete(char);
        }
    }

    public initialize(words: string[]): void {
        words.forEach((word) => this.insert(word));
    }

    public print(): void {
        this.printRecursive(this.root, '');
}

    private printRecursive(root: TrieNode, s: string) {
        if (root.isWord) {
            console.log(s);
        }
        for (const [key, value] of root.children) {
            this.printRecursive(value, s + key);
        }
    }

    public findWords(input: string): string[] {
        input = input.toLowerCase();
        const words: string[] = [];
        let node = this.root;
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (!node.children.has(char)) {
                break;
            }
            node = <TrieNode>node.children.get(char);
        }
        if (node.isWord) {
            words.push(input);
        }
        this.findWordsRecursive(node, input, words);
        return words;
    }

    private findWordsRecursive(node: TrieNode, input: string, words: string[]) {
        if (node.isWord) {
            words.push(input);
        }
        for (const [char, child] of node.children) {
            this.findWordsRecursive(child, input + char, words);
        }
    }
}
