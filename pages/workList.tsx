import { Work } from '../components/model/models'
import thumbBanking from '../public/images/works/banking_stock.jpg'

export function getWorkList(): String[] {
    let bankingShowcase = new Work('banking','Banking Showcase',thumbBanking,'A showcase project used as application example for Finologee.');

    let resultArray = [bankingShowcase.serialize()];
    return resultArray;
}
