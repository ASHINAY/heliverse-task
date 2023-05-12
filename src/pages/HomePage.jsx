import React from 'react'

function HomePage() {
    return (
        <div>
            <div style={{
                display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px', background: '#D25380', height: '35px', width: '100%', paddingTop: '20px'
            }}>
                <div>
                    <span style={{ color: 'white', fontWeight: 'bold' }}>Heliverse Task</span>
                </div>

            </div>
            <div>
                <input style={{ display: 'flex', marginLeft: '20px', marginTop: '40px', width: '80%', height: '30%' }} type="text" placeholder='Search Name....'></input>
            </div>
        </div>



    )
}

export default HomePage