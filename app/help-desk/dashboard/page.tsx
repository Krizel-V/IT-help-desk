import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"


export default function DashboardPage() {

    const cardContent = [
        { title: "a", description: "lorem", data: "1" },
        { title: "b", description: "ipsum", data: "2" },
        { title: "c", description: "lorem ipsum", data: "3" },
    ];

    return (
        <div className="flex flex-col h-full w-full gap-5 p-1">
            <div className="flex w-full gap-5">
                {cardContent.map((card) => (
                    <Card size="sm" className="mx-auto w-full max-w-sm py-5" key={card.title}>
                        <CardHeader>
                            <CardContent>
                                <p className="text-4xl text-center mb-5">
                                    {card.data}
                                </p>
                            </CardContent>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription>
                                {card.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <div className="w-full h-full box-border flex gap-5">
                <div className="flex flex-col h-full w-full border rounded-lg bg-white">
                    <Item>
                        <ItemMedia variant="icon">
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Security Alert</ItemTitle>
                            <ItemDescription>
                                New login detected from unknown device.
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <Button size="sm" variant="ghost">
                                View All {'->'}
                            </Button>
                        </ItemActions>
                    </Item>
                    <ScrollArea className="h-full">

                    </ScrollArea>
                </div>

                <div className="flex flex-col h-full w-full border rounded-lg bg-white">
                    <Item>
                        <ItemMedia variant="icon">
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>Security Alert</ItemTitle>
                            <ItemDescription>
                                New login detected from unknown device.
                            </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                            <Button size="sm" variant="ghost">
                                View All {'->'}
                            </Button>
                        </ItemActions>
                    </Item>
                     <ScrollArea className="h-full">

                    </ScrollArea>
                </div>
            </div>
        </div>
    )

}
{/* <Card size="sm" className="mx-auto w-full max-w-sm py-5">
    <CardHeader>
        <CardContent>
            <p className="text-5xl text-center mb-5">
                1
            </p>
        </CardContent>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>
            This card uses the small size variant.
        </CardDescription>
    </CardHeader>
</Card> */}

// {
//     cardContent.map((card) => (
//         <Card key={card.title} size="sm" className="mx-auto w-full max-w-sm py-5">
//             <CardHeader>
//                 <CardContent>
//                     <p className="text-5xl text-center mb-5">
//                         {card.data}
//                     </p>
//                 </CardContent>
//                 <CardTitle>{card.title}</CardTitle>
//                 <CardDescription>{card.description}</CardDescription>
//             </CardHeader>
//         </Card>
//     ))
// }

