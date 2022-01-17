import { getProviders, signIn } from "next-auth/react";

function LogIn({ providers }) {
    return (
        <div className="flex flex-col items-center justify-center bg-black min-h-screen w-full">
            <img className="w-52 mb-5" src="https://i.imgur.com/fPuEa9V.png" alt="Spotify" />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button
                        className="bg-[#18D860] text-white p-5 rounded-full"
                        onClick={() =>
                            signIn(provider.id, { callbackUrl: "/" })
                        }
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default LogIn;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        },
    };
}
