import Link from 'next/link'

function StudentsList() {
  return (
    <>
    <div><h1>This Is Students List Page</h1></div>
    <ul>
        <li>
            <Link href="/studentlist/Bablu">Bablu</Link>
        </li>
        <li><Link href="/studentlist/Dablu">Dablu</Link></li>
        <li><Link href="/studentlist/Golu">Golu</Link></li>
        <li><Link href='/studentlist/Santu'>Santu</Link></li>
        <li><Link href='/studentlist/Ram'>Ram</Link></li>
        <li><Link href='/studentlist/Lakhshman'>Lakhshman</Link></li><br/><br/>
        <Link href="/">Go T Home</Link>
    </ul>
    </>
  )
}

export default StudentsList