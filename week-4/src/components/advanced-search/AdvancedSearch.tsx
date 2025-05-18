import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import SearchInputField from "./SearchInputField"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Switch } from "../ui/switch"
import RangeSelector from "./RangeSelector";
import SearchPic from "@/assets/images/search.png"

const AdvancedSearch = () => {
  const [type, setType] = useState<"movie" | "series">("movie");

  return (
    <section className="bg-secondary flex rounded-lg">
      <div className="flex flex-col items-center bg-secondary2 rounded-lg rounded-bl-[4rem] rounded-tl-none py-6 gap-4 w-1/8">
        <img src={SearchPic} alt="search pic" className="w-1/3" />
        <span className="text-white text-sm">جستجو</span>
        <span className="text-primary text-sm">حرفه ای</span>
      </div>

      <div className="w-full">
        <div className="flex justify-evenly items-center">
          <div className="flex gap-2 text-white text-sm items-center">
            نوع
            <ToggleGroup dir="rtl" type="single" className="bg-secondary2 rounded-full p-1 items-center" value={type} onValueChange={(value) => setType(value as "movie" | "series")}>
              <ToggleGroupItem value="movie" aria-label="Toggle bold" className="text-white">
                <div className={cn("rounded-full py-1 px-3 text-sm", type === "movie" ? "bg-primary" : "")}>
                  فیلم
                </div>
              </ToggleGroupItem>
              <ToggleGroupItem value="series" aria-label="Toggle italic" className="text-white">
                <div className={cn("rounded-full py-1 px-3 text-sm", type === "series" ? "bg-primary" : "")}>
                  سریال
                </div>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <SearchInputField id="director" label="کارگردان" placeholder="Christopher Nolan" />
          <SearchInputField id="actors" label="بازیگران" placeholder="Leonardo Dicaprio" />
          <div className="w-1/4">
            <RangeSelector label="سال ساخت" min={1888} max={2025} defaultLower={1888} defaultUpper={2025} />
          </div>

        </div>

        <div className="flex justify-evenly items-center">
          <div>
            کشور
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select>
          </div>
          <div>رده سنی</div>
          <div>ژانر</div>
          <div className="w-1/4">
            <RangeSelector label="امتیاز" min={1} max={10} step={0.1} defaultLower={0} defaultUpper={10} floatingPoints={1} />
          </div>

        </div>

        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex justify-between w-1/2">
            <div className="flex items-center gap-2">
              <label htmlFor="persian-doubled" className="text-white text-sm">دوبله فارسی</label>
              <Switch id="persian-doubled" dir="ltr" />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="censored" className="text-white text-sm">سانسور شده</label>
              <Switch id="censored" dir="ltr" />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="subtitle" className="text-white text-sm">زیرنویس</label>
              <Switch id="subtitle" dir="ltr" />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="online-stream" className="text-white text-sm">پخش آنلاین</label>
              <Switch id="online-stream" dir="ltr" />
            </div>
          </div>
          <div>جستجو</div>
        </div>

      </div>
    </section>
  )
}

export default AdvancedSearch