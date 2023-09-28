import Link from 'next/link'
import Container from './ui/container'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
const Header = () => {
  return (
    <header className='sm:flex sm:justify-between py-3 px-4 border-b'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    
                        <Sheet>
                            <SheetTrigger>
                                <Menu className='h-6 md:hidden w-6'>
                                </Menu>
                            </SheetTrigger>
                            <SheetContent side='left' className='w-[300px] sm:w-[400px]'>
                                <nav className='flex flex-col gap-4'>
                                    <Link key={1} href='/login' className='block px-2 py-1 text-lg'>Login</Link>
                                    <Link key={1} href='/signup' className='block px-2 py-1 text-lg'>Sign Up</Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className='ml-4 lg:ml-0'>
                        <h1 className='text-xl font-bold'>
                            Staff Navigator
                        </h1>
                    </Link>
                </div>
                <nav className='mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block'>
                    <Button asChild variant='ghost'>
                        <Link key={1} href='/login' className='text-sm font-medium transition-colors'>Login</Link>
                    </Button>
                    <Button asChild variant='ghost'>
                        <Link key={2} href='/signup' className='text-sm font-medium transition-colors'>Sign Up</Link>
                    </Button>
                </nav>
            </div>
        </Container>
    </header>
  )
}

export default Header