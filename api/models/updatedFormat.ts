import { UserInfo } from './userInfo.ts';
import { PersonalityFormat } from './personalityFormat.ts';
import { EgoFormat } from './egoFormat.ts';
import { FormationFormat } from './formationFormat.ts';
import { LobbyCgFormat } from './lobbyCgFormat.ts';
import { ChanceFormat } from './chanceFormat.ts';
import { BattlePassFormat } from './battlePassFormat.ts';
import { MainChapterStateFormat } from './mainChapterStateFormat.ts';
import { MailFormat } from './mailFormat.ts';
import { AnnouncerFormat } from './announcerFormat.ts';
import { MembershipFormat } from './membershipFormat.ts';
import { GachaRecordFormat } from './gachaRecordFormat.ts';
import { EventRewardStateFormat } from './eventRewardStateFormat.ts';
import { UnlockCodeFormat } from './unlockCodeFormat.ts';
import { MissionFormat } from './missionFormat.ts';
import { MissionConditionFormat } from './missionConditionFormat.ts';
import { DanteAbilityFormat } from './danteAbilityFormat.ts';

export interface UpdatedFormat {
    isInitialized: boolean;                  
    userInfo: UserInfo;                      
    personalityList: PersonalityFormat[];          
    egoList: EgoFormat[];                          
    formationList: FormationFormat[];              
    lobbyCG: LobbyCgFormat;                        
    chanceList: ChanceFormat[];                    
    battlePass: BattlePassFormat;                  
    mainChapterStateList: MainChapterStateFormat[]; 
    mailList: MailFormat[];                        
    announcer: AnnouncerFormat;                    
    membershipList: MembershipFormat[];            
    gachaList: GachaRecordFormat[];                      
    userUnlockCodeList: UnlockCodeFormat[];    
    eventRewardStateList: EventRewardStateFormat[]; 
    isUpdatedUserBanner: boolean;            
    isResetMirrorDungeon: boolean;
    missionList: MissionFormat[];
    missionConditionList: MissionConditionFormat[];
    danteAbilityList: DanteAbilityFormat[];
}
