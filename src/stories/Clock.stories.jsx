import { Clock } from '../components/Clock'

export default {
    title: 'Clock',
    component: Clock,
    tags: ['autodocs'],
};

export const Default = () => {return(<Clock timeZone={'Europe/Berlin'} timeStyle={'short'}/>)};

