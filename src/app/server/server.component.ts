import { Component } from "@angular/core";//need to import this to use Component decorator

//the @Component decorator tells typescript that this is not just a normal
//typescript class but instead a Component
@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.css"]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    //constructor called every time this class is instantiated meaning called
    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}