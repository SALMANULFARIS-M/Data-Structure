// class TrieNode{
//     constructor() {
//         this.children ={}
//         this.isEnd =false
//     }
// }

// class prefixTrie{
//     constructor(){
//         this.root = new TrieNode(null)
//     }
//     insert(word){
//         let curr = this.root
//         for(let i=0;i<word.length;i++){
//             let char =word[i]
//             if(!curr.children[char]){
//                 curr.children[char] = new TrieNode()
//             }
//             curr = curr.children[char]
//         }
//         curr.isEnd = true
//     }
//     search(word){
//         let curr = this.root
//         for(let i=0;i<word.length;i++){
//             let char = word[i]
//             if(!(char in curr.children)){
//                 return false
//             }
//             curr = curr.children[char]
//         }
//         return true
//     }
//     searchWithprefix(prefix){
//         let curr = this.root
//         const result =[];
//         for(let i=0;i<prefix.length;i++){
//             const char =prefix[i]
//             if(!curr.children[char]){
//                 return result
//             }
//             curr = curr.children[char]
//         }
//         this.collectWords(curr,prefix,result)
//         return result;
//     }
//     collectWords(node,prefix,result){
//         if(node.isEnd){
//             result.push(prefix)
//         }
//         for(const char in node.children){
//             this.collectWords(node.children[char],prefix+char,result)
//         }
//     }
// }

// const prefix = new prefixTrie()
// prefix.insert('prayag')
// prefix.insert('prajwal')
// prefix.insert('prakeeth')
// console.log(prefix.search('prayag'));

// console.log(prefix.searchWithprefix('p'));