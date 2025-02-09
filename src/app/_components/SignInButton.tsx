'use client'
import { useSession, signIn, signOut } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
export function SignInButton() {
    const session = useSession()

    console.log('session', session)

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
                {session && <span>Logged in as {session.data?.user?.name}</span>}
            </p>

            <button
                onClick={() => {
                    if (session.data) {
                        signOut()
                            .then((data) => {
                                console.log('signed out', data)
                            })
                            .catch(console.error)
                    } else {
                        signIn
                            .social({ provider: 'google' })
                            .then((data) => {
                                if (data.data?.url) {
                                    window.location.replace(data.data.url)
                                }
                            })
                            .catch(console.error)
                    }
                }}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
                {session.data ? 'Sign out' : 'Sign in'}
            </button>
        </div>
    )
}
