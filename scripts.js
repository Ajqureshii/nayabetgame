// JavaScript Code to Dynamically Add Sections
document.addEventListener("DOMContentLoaded", function () {
    // Helper function to create and append HTML
    function addSection(htmlContent) {
        const container = document.getElementById("app"); // Assuming there's a div with id="app"
        if (container) {
            container.insertAdjacentHTML("beforeend", htmlContent);
        }
    }

    // Header Section
    const headerHTML = `
        <header style="background: #1c1d21; padding: 20px; text-align: center; color: white;">
            <h1>Naya365</h1>
            <p>Your Ultimate Gaming Destination</p>
        </header>
    `;
    addSection(headerHTML);

    // Features Games Section
    const featuresGamesHTML = `
        <section style="background: #1c1d21; padding: 20px; color: white; text-align: center;">
            <h2>Features Games</h2>
            <div>
                <div>Game 1</div>
                <div>Game 2</div>
                <div>Game 3</div>
                <div>Game 4</div>
            </div>
        </section>
    `;
    addSection(featuresGamesHTML);

    // Pragmatic Games Section
    const pragmaticGamesHTML = `
        <section style="background: #1c1d21; padding: 20px; color: white; text-align: center;">
            <h2>Pragmatic Games</h2>
            <div>
                <div>Game A</div>
                <div>Game B</div>
                <div>Game C</div>
                <div>Game D</div>
            </div>
        </section>
    `;
    addSection(pragmaticGamesHTML);

    // App Details Section
    const appDetailsHTML = `
        <section style="background: #1c1d21; padding: 20px; color: white; text-align: center;">
            <h2>App Details</h2>
            <table style="margin: 0 auto; color: white; border-collapse: collapse;">
                <tr><td>App Name</td><td>Naya365</td></tr>
                <tr><td>Version</td><td>2.5.1</td></tr>
                <tr><td>Ratings</td><td>4.8/5</td></tr>
                <tr><td>Reviews</td><td>15,874+</td></tr>
                <tr><td>Downloads</td><td>1,000,000+</td></tr>
                <tr><td>Compatibility</td><td>Android 5.0+ / iOS 11.0+</td></tr>
                <tr><td>Last Updated</td><td>January 1, 2025</td></tr>
                <tr><td>Size</td><td>50 MB</td></tr>
                <tr><td>Developer</td><td>Naya365 Ltd.</td></tr>
                <tr><td>Category</td><td>Casino & Games</td></tr>
            </table>
        </section>
    `;
    addSection(appDetailsHTML);

    // Service Section
    const serviceHTML = `
        <section style="background: #1c1d21; padding: 20px; color: white; text-align: center;">
            <h2>Service</h2>
            <p><strong>Payment secured by BetSafe tech.</strong></p>
            <p>
                naya365 only offers in-platform deposit channels. 
                Please do not trust anyone impersonating naya365 customer service offering agent-based deposits!
            </p>
        </section>
    `;
    addSection(serviceHTML);

    // ₹500 Extra + ₹100 Bonus Section
    const bonusHTML = `
        <section style="background: #1c1d21; padding: 20px; color: white; text-align: center;">
            <h2>₹500 Extra + ₹100</h2>
            <p>Get a 20% bonus on your deposit!</p>
            <p>RULES:</p>
            <ul style="list-style: none; padding: 0; text-align: left; margin: 0 auto; max-width: 500px; color: white;">
                <li>After the deposit is successful, you will receive a bonus of 20% of the recharge amount.</li>
                <li>Each account can receive a maximum of 5 bonuses per day.</li>
                <li>Deposit withdrawal conditions: wager equal to 3 times the deposit.</li>
                <li>Bonus withdrawal conditions: wager equal to 20 times the bonus.</li>
                <li>After completing the betting amount, you can choose to continue the game or withdraw the balance.</li>
            </ul>
        </section>
    `;
    addSection(bonusHTML);

    // VIP Cashback Rules Section
    const vipRulesHTML = `
        <section style="background: #1c1d21; padding: 20px; color: white; text-align: center;">
            <h2>VIP Cashback Rules</h2>
            <p>Weekly VIP Cashback Rewards: Distributed every week based on activity during the week.</p>
            <p>Activity Cycle: Monday 00:00 to Sunday 23:59.</p>
            <p>Reward Claim Time Frame: Monday 06:00 to Wednesday 23:59.</p>
            <p>Eligibility Criteria: Bets must be placed during the cashback period.</p>
            <p>Max Cashback: ₹100,000 per week.</p>
        </section>
    `;
    addSection(vipRulesHTML);
});
