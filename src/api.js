const BASE=(import.meta.env.VITE_API_URL||'https://deltaserver-1-3fs2.onrender.com').replace(/\/$/,'');
function errorMessage(payload,status){
 const error=payload?.error;
 if(error?.details){
  const fields=error.details.fieldErrors||{};
  const messages=[...(error.details.formErrors||[]),...Object.entries(fields).flatMap(([field,errors])=>(errors||[]).map(msg=>`${field}: ${msg}`))];
  if(messages.length)return messages.join('; ');
 }
 return error?.message||`Request failed (${status})`;
}
export async function api(path,options={}){
 let response;
 try{response=await fetch(`${BASE}/api/v1${path}`,{...options,headers:{'Content-Type':'application/json',...(options.headers||{})}})}
 catch{throw Error(`Cannot connect to Delta Kebab server at ${BASE}. Check that npm run dev is running and CORS allows this website.`)}
 let payload;try{payload=await response.json()}catch{throw Error(`Server returned a non-JSON response (${response.status})`)}
 if(!response.ok)throw Error(errorMessage(payload,response.status));
 return payload;
}
export async function allPages(path){let offset=0,rows=[];while(true){const p=await api(`${path}${path.includes('?')?'&':'?'}limit=100&offset=${offset}`);rows.push(...p.data);if(rows.length>=p.pagination.total||!p.data.length)break;offset+=p.data.length;}return rows;}
