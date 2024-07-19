const coding = ["java","py","rb","cpp","js",];

coding.forEach(element => {
    console.log(element);
});

let myCoding = [
    {
        langName: "javascript",
        langFileName:"js"
    },
    {
        langName: "java",
        langFileName:"java"
    },
    {
        langName: "python",
        langFileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
})