import {Work} from '../components/model/models'
import thumbBanking from '../public/images/works/banking_thumb.jpg'
import {Component} from "react";

export class WorkService extends Component {
    static classInstance = null;

    static getInstance() {
        return new WorkService(null);
    }

    getWorkList(): string[] {
        let bankingShowcase = new Work('banking', 'Banking Showcase', thumbBanking, 'A showcase project used as application example for Finologee.');

        return [bankingShowcase.serialize()];
    }
}

export default WorkService;
