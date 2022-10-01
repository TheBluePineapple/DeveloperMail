const fetch = require("node-fetch");

const base = "https://www.developermail.com/api/v1/mailbox";

async function createEmail() {
	return await fetch(base, {
		"headers": {
			"accept": "application/json",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/json",
		},
		"method": "PUT",
	})
	.then(res=>res.json())
	.then(data=>{
		if(data.success){
			return data.result;
		}else{
			console.error(data.errors);
		}
	})
	.catch(e=>console.error(e));
}
async function deleteEmail(emailId,emailToken) {
	return await fetch(`${base}/${emailId}`,{
		"headers": {
			"accept-language": "en-US,en;q=0.9",
			"X-MailboxToken": emailToken,
		},
		"method": "DELETE",
	})
	.then(res=>res.json())
	.then(data=>data.success)
	.catch(e=>console.error(e));
	
}
async function messageList(emailId,emailToken) {
	return await fetch(`${base}/${emailId}`,{
		"headers": {
			"accept-language": "en-US,en;q=0.9",
			"X-MailboxToken": emailToken,
		},
		"method": "GET",
	})
	.then(res=>res.json())
	.then(data=>{
		if(data.success){
			return data.result;
		}else{
			console.error(data.errors);
		}
	})
	.catch(e=>console.error(e));
}
async function getMessagesContent(emailId,messages,emailToken) {
	return await fetch(`${base}/${emailId}/messages`,{
		"headers": {
			'accept': 'application/json',
			'Content-Type': 'application/json',
			"accept-language": "en-US,en;q=0.9",
			"X-MailboxToken": emailToken,
		},
		 body: JSON.stringify(messages),
		"method": "POST",
	})
	.then(res=>res.json())
	.then(data=>{
		if(data.success){
			return data.result;
		}else{
			console.error(data.errors);
		}
	})
	.catch(e=>console.error(e));
}
