import React from "react"
import { useWallet } from "@solana/wallet-adapter-react"

export default function PublicKey() {
    const { publicKey } = useWallet()
    return (
        <>
            <div>
                {publicKey?.toString()}
            </div>
        </>
    )
}