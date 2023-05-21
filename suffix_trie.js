class TrieNode{
    constructor(){
        this.children ={}
        this.isEnd =false
    }
}

class SuffixTrie{
    constructor() {
        this.root = new TrieNode(null)
    }
    insert(word){
        // inserting a word in suffix trie
        for(let i=0;i<word.length;i++){
            this.suffix(i,word)
        }
    }
    suffix(index,word){
        let curr = this.root;
        for(let i=index;i<word.length;i++){
            let char =word[i]
            if(!curr.children[char]){
                curr.children[char]=new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.isEnd = true
        // console.log(this.root.children['p']);
    }
    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            let char = word[i]
            if(!(char in curr.children)){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }
}
const suffix = new SuffixTrie()
suffix.insert('prayag')
suffix.insert('prajwal')
console.log(suffix.search('prayag'));