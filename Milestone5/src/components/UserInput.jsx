
export default function UserInput({onChange, userInput}) {
    


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event)=>onChange('initialInvestment',event.target.value)} />
                </p>
                <p>
                    <label>Anual investment</label>
                    <input type="number" required value={userInput.anualInvestment} onChange={(event)=>onChange('anualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event)=>onChange('expectReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event)=>onChange('duration',event.target.value)}/>
                </p>
            </div>
        </section>
    );
}