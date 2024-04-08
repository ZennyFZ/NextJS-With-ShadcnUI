import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/login'>
                        Đăng ký
                    </Link>
                </li>
                <li>
                    <Link href='/register'>
                        Đăng nhập
                    </Link>
                </li>
            </ul>
            <ModeToggle />
        </div>
    );
}