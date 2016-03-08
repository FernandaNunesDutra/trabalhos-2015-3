/**
 * Created by Héber on 24-Jan-16.
 */
function SpriteBonus(x, y, img, velocidadeBala){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.w = 40;
    this.h = 40;
    this.velocidadeBala = velocidadeBala;
    this.mover = function(dt){
        this.x = this.x + this.velocidadeBala*dt;
    };
    this.desenhar = function(ctx){
        imagens.desenhaXYWH(ctx, img, this.x, this.y, this.w, this.h);
    };
    this.controlar = function(){
    };
    this.colidiuCom = function(alvo){
        if(this.x > alvo.x+alvo.w) return false;
        if(this.x+this.w < alvo.x) return false;
        if(this.y > alvo.y+alvo.h) return false;
        if(this.y+this.h < alvo.y) return false;
        return true;
    };
}