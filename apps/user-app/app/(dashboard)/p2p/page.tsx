import { SendCard } from "@repo/ui/sendcard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransactions";

export default function() {
    // const balance = await getBalance();
    // const transactions = await getOnRampTransactions();
    return <div className="w-full">
        <SendCard></SendCard>
        {/* // <div>
        //     <BalanceCard amount={balance.amount} locked={balance.locked} />
        //         <div className="pt-4">
        //             <OnRampTransactions transactions={transactions} />
        //         </div>
        // </div> */}
    </div>
}