import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../component/pages/Accueil'
import CV from '../component/pages/CV'
import Counter from '../component/pages/useState'
import Navigation from '../layout/navigation'

const Routeur = () => {
    return (
        <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path='/' element={<Accueil />} />
                    <Route path='/CV' element={<CV />} />
                    <Route path='/useState' element={<Counter />} />
                </Routes>
        </BrowserRouter>
    )
}

export default Routeur
