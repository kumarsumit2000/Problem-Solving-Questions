function possibleChanges(usernames) {
    let results = [];

    usernames.forEach(element => {
        let canChange = false;
        let Code = element.split("").map(char => char.toLowerCase().charCodeAt(0));
        
        for(let i = 0; i < Code.length - 1; i++){
            if(Code[i] > Code[i + 1]){
                canChange = true;
                break;
            }
        }
        
        if(canChange){
            results.push("Yes");
        } else {
            results.push("No");
        }
    });
    
    return results;
}
