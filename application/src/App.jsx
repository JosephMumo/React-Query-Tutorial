import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home.page';
import { SuperHero } from './components/SuperHeroes.page';
import { RQSuperHeroes } from './components/RQSuperHeroes.page';

function App() {
    const queryClient = new QueryClient()
    return(
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to ="/"><h2>Home</h2></Link></li>
                            <li><Link to="/superhero"><h2>SuperHero</h2></Link></li>
                            <li><Link to="/rqsuperheroes"><h2>RQSuperHero</h2></Link></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/superhero' element={ <SuperHero /> } />
                        <Route path='/rqsuperheroes' element={ <RQSuperHeroes /> } />
                    </Routes>
                </div>
            </Router>
            <ReactQueryDevtools  initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
    )
}
export default App;