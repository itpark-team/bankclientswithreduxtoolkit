import axios from "axios";

class BankClientsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "https://localhost:7109/BankClients"
        });
    }

    async getAllBankClients() {
        return await this.#axios.get("/GetAll");
    }

    async addNewBankClient(inputBankClient) {
        return await this.#axios.post("/AddNew", inputBankClient);
    }

    async deleteByIdBankClient(id) {
        return await this.#axios.delete(`/DeleteById/${id}`);
    }


}

export default BankClientsApiWorker;