// components/PasswordForm.js
"use client"; // This directive tells Next.js that this is a client-side component

import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler, useState } from 'react';
import crypto from 'crypto'

const PasswordForm = ({ hash, isPdf }: { hash: string, isPdf? : boolean }) => {
    const [password, setPassword] = useState('');

    const router = useRouter();

    const pubKey = "-----BEGIN RSA PUBLIC KEY-----"+
  "MIIBCgKCAQEA11+MyFTzJ7bJPyARVARiirybxX1PJLbKGFjShqYv55P+IZpqJOPg"+
  "17lDhrU8Qu9nsHsFQj1Em3dZK3psc45RwMPmF/H6I3/l+e4U0hiNouyGXdz2lEUd"+
  "TuH/KtP7pn5wMdWStqq7y8oBp1BpUxvFnSghnLYsTxvaE7HwUtC68/wfjN3A1Vom"+
  "TYCdC32Gb/WeHODtApN/BQ6eJYJbxYOLVPZhkJq1aDZm4AJkC6JFdkT5dpmdy6+h"+
  "z7uqVcZq9xg/VBj+4V2rIqbuUskqzezGpuvKR35URRSlxL9lFkzZhLcn8ABRoy1x"+
  "PuJeARCE+GTg3tpB4dwlJL8GViQvw3glqwIDAQAB"+
  "-----END RSA PUBLIC KEY-----"

    const handleSubmit : FormEventHandler<HTMLFormElement> | undefined = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // router.push(`/${hash}/?pwd=${password}`);
        const encryptedPassword = encryptPassword(password, pubKey);
        if(isPdf){
            router.push(`/pdf/${hash}/?pwd=${encodeURIComponent(encryptedPassword)}`);
        }
        else{
            router.push(`/${hash}/?pwd=${encodeURIComponent(encryptedPassword)}`);
        }
    };

    // Encrypt data using public key
    const encryptPassword = (data:string , publicKey:string) => {
        return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString('base64');
    };

    return (
        <div className="min-h-screen bg-[#ffffff] flex items-center justify-center p-8">
            <div className="w-full max-w-lg mx-auto bg-[#ffffff] shadow-md rounded-2xl p-8 border border-[#487b94]">
                <h1 className="text-center text-4xl font-sans text-[#000000] mb-8">Password Protected</h1>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="password" className="block text-sm font-sans text-[#171717] mb-2">Enter your password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-[#41718a] rounded-lg bg-[#ffffff] text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#41718a] transition duration-300"
                        />
                    </div>
                    <div className="flex justify-start">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-[#41718a] text-white font-sans rounded-lg hover:bg-[#487b94] focus:outline-none focus:ring focus:ring-[#41718a] transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordForm;