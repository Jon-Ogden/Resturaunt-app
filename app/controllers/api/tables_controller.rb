class Api::TablesController < ApplicationController
        before_action :set_waiter, except: [:all_tables]
        before_action :set_table, only: [:show, :destroy, :update]
    
        def all_tables
            render json: Table.all.order(:created_at)
        end
    
        def index
            render json: @waiter.tables
        end
    
        def show
            render json: @table
        end
    
        def create
            @table = @waiter.tables.new(table_params)
            if(@table.save)
                render json: @table
            else
                render json @table.errors.full_messages, status:422
            end
        end
    
        def update
            if(@table.update(table_params))
                render json: @table
            else
                render json: @table.errors.full_messages, status: 422
            end
        end
    
        def destroy
            render json: @table.destroy
        end
    
        private
        def set_waiter
            @waiter = Waiter.find(params[:waiter_id])
        end
        def set_table
            @table = @waiter.tables.find(params[:id])
        end
        def table_params
            params.require(:table).permit(:seats, :waiter_id)
        end
    
end
