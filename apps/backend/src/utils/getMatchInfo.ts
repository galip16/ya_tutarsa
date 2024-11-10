import puppeteer from 'puppeteer';

export async function getMatchInfo(team: string) {
    const url = 'https://www.flashscore.com/team/' + team;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const matchInfo = await page.evaluate(() => {
        // Yaklaşan ilk maç tarihini, rakip takımı ve maçın ev sahibi/konuk bilgilerini cek
        const matchDate = document.querySelector('.event__time')?.textContent.trim();
        const homeTeam = document.querySelector('.event__homeParticipant')?.textContent.trim();
        const awayTeam = document.querySelector('.event__awayParticipant')?.textContent.trim();

        return {
            date: matchDate,
            homeTeam,
            awayTeam,
            homeScore: null,
            awayScore: null

        };
    });

    await browser.close();
    return matchInfo;
}


