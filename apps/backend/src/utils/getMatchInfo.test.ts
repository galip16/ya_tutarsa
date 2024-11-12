import { getMatchInfo } from "./getMatchInfo";


const teamsInfo = ["galatasaray/riaqqurF/", "fenerbahce/MsbmracL/"]


test("returns gs match info", async () => {
    const res = await getMatchInfo(teamsInfo[0]);
    expect(res).not.toBeNull();
    console.log(res);
    
})