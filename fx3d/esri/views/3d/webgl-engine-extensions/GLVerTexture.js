/**
 * Copyright @ 2019 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["dojo/_base/declare","../support/fx3dUtils"],function(e,t){var i=0,n=e(null,{declaredClass:"esri.views.3d.webgl-engine-extensions.GLVerTexture",constructor:function(e){this.id=i++,this._gl=e,this._ready=!1,this._pixelDataType=null,this._gl&&(this._textureHandle=this._gl.createTexture())},_initParams:function(){this._gl.texParameteri(3553,10242,33071),this._gl.texParameteri(3553,10243,33071),this._gl.texParameteri(3553,10240,9728),this._gl.texParameteri(3553,10241,9728)},_reset:function(e,i){this._width=e,this._height=i,this._pixelSize=window.parseInt(this._width*this._height*4),this._isPowerOfTwo=t.isPowerOfTwo(e)&&t.isPowerOfTwo(i),this._isPowerOfTwo||console.warn("Width and height are not power of 2, and the rendering may be incorrect.")},setData:function(e,t,i){if(this._textureHandle){if(i instanceof Uint8Array)this._pixelDataType=5121;else{if(!(i instanceof Float32Array))return;this._pixelDataType=5126}if(this._reset(e,t),isNaN(this._pixelSize)||this._pixelSize!==i.length)return void console.warn("The pixel size is invalid.");var n=this._gl.getParameter(32873);this._gl.bindTexture(3553,this._textureHandle),this._initParams();var s=window.WebGLRenderingContext&&this._gl instanceof window.WebGLRenderingContext?this._gl.RGBA:this._gl.RGBA32F;this._gl.texImage2D(3553,0,s,this._width,this._height,0,this._gl.RGBA,this._pixelDataType,i),this._gl.bindTexture(3553,n)}},bind:function(e){this._textureHandle&&("number"==typeof e&&this._gl.activeTexture(33984+e),this._gl.bindTexture(3553,this._textureHandle))},unbind:function(){this._gl.bindTexture(3553,null)},release:function(){this._gl.bindTexture(3553,null)},getTextureHandle:function(){return this._textureHandle},dispose:function(){this._textureHandle.__deleted__=!0,this._gl.deleteTexture(this._textureHandle)}});return n});