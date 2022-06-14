class Api::WaitersController < ApplicationController
    before_action :set_waiter, only: [:show, :update, :destroy]

    def index
        render json: Waiter.all
    end
    def show
        render json: @waiter
    end
    def create
        puts waiter_params
        @waiter = Waiter.new(waiter_params)
        if(@waiter.save)
            render json: @waiter
        else
            render json: @waiter.erros.full_messages, status:422
        end
    end
    def update
        if(@waiter.update(waiter_params))
            render json: @waiter
        else
            render json: @waiter.errors.full_messages, status: 422
        end
    end
    def destroy
        render json: @waiter.destroy
    end

    private

    def set_waiter
        @waiter = Waiter.find(params[:id])
    end
    def waiter_params
        params.require(:waiter).permit(:name, :age)
    end

end
