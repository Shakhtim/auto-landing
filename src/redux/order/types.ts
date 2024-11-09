export interface Order {
    id: string;
    dateCreated: Date;
    name: string;
    phone: string;
    ip: string;
    brand: string;
    model: string;
    configuration: string;
    firstPayment: number;
    loanTerm: number;
    entryPoint: string;
    yclid: string;
    type: string;
}
export interface OrderState {
    orders: Array<Order>;
    loading: boolean;
    error: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
