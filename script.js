const extendHex = (shortHex) => {
  // write your code here
	let ans="#"
	if(shortHex[0]=="#"){	
		for(let i=1;i<shortHex.length;i++){
			ans=ans+shortHex[i]+shortHex[i]
		}
	}else{
		for(let i=0;i<shortHex.length;i++){
			ans=ans+shortHex[i]+shortHex[i]
		}
	}
	return ans;   
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
