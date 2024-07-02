import { ComponentProps } from "react";

interface TabelaProps extends ComponentProps<'table'>{

}

export function Table(props:TabelaProps){
    return (
        <div className="border border-white/10 rounded-lg">
            <table className="w-full" {...props}>
            </table>
        </div> 
    )
}