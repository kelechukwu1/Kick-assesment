
import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

const SettingsWithdrawalPage = () => {
    const [selectedID, setSelectedID] = useState("");
    return (
        <div className="flex-1 mb-10 lg:mb-0">
            <Card className="w-full border-[1px] border-gray-700">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-[18px] text-white">Withdrawal Settings</CardTitle>
                    <Button variant="outline" size="sm" className="cursor-pointer border border-[#FF1975] gap-1 bg-[#3d4250] rounded-[8px]">
                        <span className="font-normal">
                            Edit
                        </span>
                        <Avatar
                            src="/pencil.svg"
                            alt="pencil avatar"
                            width={12}
                            height={12}
                        />
                    </Button>
                </CardHeader>
                <CardContent className="space-y-4 w-full lg:max-w-[65%]">
                    <div className="flex items-center gap-4">
                        <Avatar
                            src="/avatar-one.svg"
                            alt="pencil avatar"
                            width={35}
                            height={35}
                        />
                        <div>
                            <h3 className="text-md text-white">Stella Odika</h3>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm">Select a relevant user identification information</h4>
                        <div className="grid gap-4">
                            <Button
                                variant="outline"
                                className={`cursor-pointer justify-start text-left font-normal h-[41px] border border-gray-700 text-[#7A7A7A] text-sm rounded-[10px] ${selectedID === 'national' ? 'bg-[#FF197526]' : ''}`}
                                onClick={() => setSelectedID('national')}
                            >
                                National ID
                            </Button>
                            <Button
                                variant="outline"
                                className={`cursor-pointer justify-start text-left font-normal h-[41px] border border-gray-700 text-[#7A7A7A] text-sm rounded-[10px] ${selectedID === 'passport' ? 'bg-[#FF197526]' : ''}`}
                                onClick={() => setSelectedID('passport')}
                            >
                                International Passport
                            </Button>
                            <Button
                                variant="outline"
                                className={`cursor-pointer justify-start text-left font-normal h-[41px] border border-gray-700 text-[#7A7A7A] text-sm rounded-[10px] ${selectedID === 'license' ? 'bg-[#FF197526]' : ''}`}
                                onClick={() => setSelectedID('license')}
                            >
                                Driver&apos;s License
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm">Bank account information</h4>
                        <div className="grid gap-4">
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="account-name" className="text-[#7A7A7A]">Account name</Label>
                                <Input id="account-name" placeholder="Enter account name" className="rounded-[10px] h-[32px] border border-gray-700 text-[#7A7A7A] text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="account-name" className="text-[#7A7A7A]">Bank name</Label>
                                <Input id="bank-name" placeholder="Enter bank name" className="rounded-[10px] h-[32px] border border-gray-700 text-[#7A7A7A] text-sm" />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <Label htmlFor="account-name" className="text-[#7A7A7A]">Account number</Label>
                                <Input id="account-number" placeholder="Enter account number" className="rounded-[10px] h-[32px] border border-gray-700 text-[#7A7A7A] text-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm">Choose withdrawal method</h4>
                        <RadioGroup defaultValue="bank" className="flex">
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <RadioGroupItem value="bank" id="bank" className="cursor-pointer" />
                                <Label htmlFor="bank">Bank transfer</Label>
                            </div>
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <RadioGroupItem value="wallet" id="wallet" className="cursor-pointer" />
                                <Label htmlFor="wallet">Digital wallet</Label>
                            </div>
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <RadioGroupItem value="paypal" id="paypal" className="cursor-pointer" />
                                <Label htmlFor="paypal">Paypal</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default SettingsWithdrawalPage
