export const shortenAddress = (address) =>
`${address.toString("").slice(0, 6)}...${address.toString("").slice(address.length - 4)}`;

export const parseErrorMsg = (e) =>{
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
};

// export const shortenAddress = (address) => {
//     if (!address) return ''; 
//     return `${address.toString().slice(0, 6)}...${address.toString().slice(address.length - 4)}`;
// };

// export const parseErrorMsg = (e) => {
//     const json = JSON.parse(JSON.stringify(e));
//     return json?.reason || json?.error?.message || ''; undefined
// };
